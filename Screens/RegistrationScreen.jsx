import React from "react";
import {
  View,
  Text,
  Image,
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

export default function RegistrationScreen() {
  const [isShownKeyboard, setIsShownKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

  const keyboardHide = () => {
    setIsShownKeyboard(true);
    Keyboard.dismiss();
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ImageBackground
          style={styles.image}
          source={require("../assets/images/BGd.jpg")}
        >
          <KeyboardAvoidingView
          // behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.form,
                marginBottom: isShownKeyboard ? 0 : 100,
              }}
            >
              <View
                style={{
                  ...styles.header,
                  marginBottom: isShownKeyboard ? 0 : 200,
                }}
              >
                <View
                  style={{
                    ...styles.ava,
                    marginTop: isShownKeyboard ? 0 : 200,
                  }}
                ></View>
                {/* <Text>Welcome</Text> */}
              </View>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 30,
                  textShadow: "rgba(0, 0, 0, 0.25)",
                }}
              >
                Регистрация
              </Text>
              <View style={{ marginTop: 32 }}>
                <TextInput
                  style={styles.input}
                  textAlign="center"
                  onFocus={() => {
                    setIsShownKeyboard(true);
                  }}
                />
              </View>
              <View style={{ marginTop: 16 }}>
                <TextInput
                  style={styles.input}
                  textAlign="center"
                  onFocus={() => {
                    setIsShownKeyboard(true);
                  }}
                />
              </View>
              <View style={{ marginTop: 16, marginBottom: 0 }}>
                <TextInput
                  style={{
                    ...styles.input,
                    marginBottom: isShownKeyboard ? 0 : 20,
                  }}
                  textAlign="center"
                  secureTextEntry={true}
                  onFocus={() => {
                    setIsShownKeyboard(true);
                  }}
                />
              </View>
              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  ...styles.btn,
                  marginBottom: isShownKeyboard ? 0 : 20,
                  marginTop: isShownKeyboard ? 0 : 43,
                }}
                onPress={keyboardHide}
              >
                <Text style={styles.btnTitle}>Зарегистрироваться</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
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
