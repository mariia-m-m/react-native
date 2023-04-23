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
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./auth/LoginScreen";
import { MaterialIcons } from "@expo/vector-icons";

const LogOutTab = createBottomTabNavigator();

const PostScreen = () => {
  return (
    <View style={styles.container}>
      <LogOutTab.Navigator tabBarOptions={{ showLabel: false }}>
        <LogOutTab.Screen
          options={{
            headerShown: true,
            tabBarIcon: ({ focused, size, color }) => (
              <MaterialIcons
                name="logout"
                size={24}
                color="black"
                iconStyle="marginLeft: auto"
              />
            ),
          }}
          name="Logout"
          component={LoginScreen}
        />
      </LogOutTab.Navigator>
      <TouchableWithoutFeedback>
        <View style={styles.header}>
          {/* <View style={styles.ava}></View>
          <Text>Публикации</Text> */}

          <View>
            <Image
              source={require("../assets/images/User.jpg")}
              style={{ width: 60, height: 60 }}
            />
            <Text
              style={{
                fontSize: 15,
                textShadow: "rgba(0, 0, 0, 0.25)",
              }}
            >
              Natali Romanova
            </Text>
            <Image
              source={require("../assets/images/Rectangle.jpg")}
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
              source={require("../assets/images/Rectangle2.png")}
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
          </View>
          {/* <TouchableOpacity activeOpacity={0.7} style={styles.btn}>
            <Text style={styles.btnTitle}>+</Text>
          </TouchableOpacity> */}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

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

export default PostScreen;