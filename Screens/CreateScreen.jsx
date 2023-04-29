import React, { useState, useEffect } from "react";
// import { View, Text, StyleSheet, Image } from "react-native";
import { Camera } from "expo-camera";
// import { TouchableOpacity } from "react-native-gesture-handler";
import * as Location from "expo-location";
import { Permissions } from "expo";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const CreateScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);

  const takePhoto = async () => {
    const cameraPermission = await Permissions.askAsync(Permissions.CAMERA);
    const locationPermission = await Permissions.askAsync(Permissions.LOCATION);
    if (
      cameraPermission.status === "granted" &&
      locationPermission.status === "granted"
    ) {
      const photo = await camera.takePictureAsync();
      const location = await Location.getCurrentPositionAsync();
      setPhoto(photo.uri);
      console.log("photo", photo);
      console.log("camera", camera);
    } else {
      console.log("Error camera permission");
    }
  };

  const sendPhoto = () => {
    console.log("navigation", navigation);
    navigation.navigate("DefaultScreen", { photo });
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={setCamera}>
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
