import React, { useState, useEffect, useRef } from "react";
import { Camera, CameraType } from "expo-camera";
import * as Location from "expo-location";
import { Permissions } from "expo";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { MaterialIcons, Ionicons, Entypo } from "@expo/vector-icons";
import { app, db, storage } from "../firebase/config";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { useSelector } from "react-redux";

import * as ImageManipulator from "expo-image-manipulator";

const CreateScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [photoCard, setPhotoCard] = useState(null);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [photoURL, setPhotoURL] = useState(null);
  const [message, setMessage] = useState("");
  const [startCamera, setStartCamera] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const { userId, name } = useSelector((state) => state.auth);

  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      const location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);
  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  function toggleCameraType() {
    console.log("FLIP");
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  const _startCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === "granted") {
      setStartCamera(true);
    } else {
      Alert.alert("Access denied!");
    }
  };

  const resizeImage = async (uri, maxWidth, maxHeight) => {
    const result = await ImageManipulator.manipulateAsync(
      uri,
      [
        {
          resize: {
            width: maxWidth,
            height: maxHeight,
          },
        },
      ],
      {
        compress: 0.7,
        format: ImageManipulator.SaveFormat.JPEG,
      }
    );

    return result.uri;
  };

  const takePhoto = async () => {
    const location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    const photo = await cameraRef.current.takePictureAsync();

    // Изменение размера изображения перед установкой состояния photoCard
    const resizedPhotoUri = await resizeImage(photo.uri, 800, 800);
    setPhotoCard(resizedPhotoUri);
    console.log("photo ==> ", photo.uri);
    console.log("message ==>", message);
  };

  const sendPhoto = () => {
    uploadPostToServer();
    navigation.navigate("DefaultScreen");
  };

  const uploadPhotoToServer = async () => {
    if (!photoURL) return;

    try {
      console.log("TRIED TO SEND PHOTO");
      const response = await fetch(photoCard);
      const file = await response.blob();
      const id = Date.now().toString();

      const reference = ref(storage, `images/${id}`);
      const result = await uploadBytesResumable(reference, file);
      const processedPhoto = await getDownloadURL(result.ref);
      console.log("processedPhoto", processedPhoto);
      setPhotoURL(processedPhoto);
      console.log("photoURL AFTER", photoURL);
      await db.storage().ref(`images/${id}`).put(file);
    } catch (err) {
      console.log(err.message);
      Alert.alert("Try again \n", err.message);
    }
  };
  const uploadPostToServer = async () => {
    await uploadPhotoToServer();
    try {
      const createPost = await addDoc(collection(db, "posts"), {
        photoURL,
        location: location.coords,
        message,
        location,
        userId,
        name,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={cameraRef}>
        {photo && (
          <View style={styles.takePhotoContainer}>
            <Image
              source={{ uri: photo }}
              style={{ width: 240, borderRadius: 10 }}
            />
          </View>
        )}
        <TouchableOpacity onPress={takePhoto} style={styles.snapContainer}>
          <MaterialIcons
            name="enhance-photo-translate"
            size={24}
            color="#BDBDBD"
          />
        </TouchableOpacity>
      </Camera>
      <View>
        <Text style={{ alignItems: "center", justifyContent: "center" }}>
          Загрузите фото
        </Text>
        <TouchableOpacity onPress={sendPhoto} style={styles.sendBtn}>
          <Text style={styles.sendLabel}>Опубликовать</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    height: "70%",
    marginHorizontal: 2,
    marginTop: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  snap: {
    color: "#fff",
  },
  snapContainer: {
    borderWidth: 1,
    borderColor: "white",
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "white",
  },
  takePhotoContainer: {
    position: "absolute",
    top: 50,
    left: 10,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
  },
  sendBtn: {
    marginHorizontal: 30,
    height: 51,
    borderWidth: 2,
    borderColor: "#FF6C00",
    borderRadius: 20,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF6C00",
  },
  sendLabel: {
    color: "#ffff",
    fontSize: 16,
  },
});

export default CreateScreen;
