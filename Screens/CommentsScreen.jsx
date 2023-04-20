import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useState } from "react";

const initialState = {
  login: "",
  email: "",
  password: "",
};

export default function CommentScreen() {
  const [state, setState] = useState(initialState);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback>
        <View style={styles.header}>
          <Text>Comments</Text>
        </View>
        <Image
          source={require("../assets/images/Rectngle.jpg")}
          style={{ width: 343 }}
        />
        <Text
          style={{
            fontSize: 12,
            textShadow: "rgba(0, 0, 0, 0.25)",
          }}
        >
          Лес
        </Text>
        <Image
          source={require("../assets/images/Rectangle2.jpg")}
          style={{ width: 343 }}
        />
        <Text
          style={{
            fontSize: 12,
            textShadow: "rgba(0, 0, 0, 0.25)",
          }}
        >
          Море
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.btn}
          onPress={keyboardHide}
        >
          <Text style={styles.btnTitle}>+</Text>
        </TouchableOpacity>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    // alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#f0f8ff",
    height: 50,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
  },
  form: {
    marginHorizontal: 16,
  },
  btn: {
    marginHorizontal: 16,
    backgroundColor: Platform.OS === "ios" ? "transparent" : "#FF6C00",
    borderRadius: 100,
    height: 51,
    alignItems: "center",
    justifyContent: "center",
  },
  btnTitle: {
    color: "#FFFFFF",
    fontFamily: "Roboto",
    FontSize: 16,
    LineHeight: 19,
    marginBottom: 0,
  },
  header: {
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 30,
    color: "#f0f8ff",
  },
  ava: {
    height: 120,
    width: 132,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
    marginBottom: 32,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 127,
  },
});
