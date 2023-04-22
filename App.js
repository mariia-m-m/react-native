import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "./Screens/auth/RegistrationScreen";
import LoginScreen from "./Screens/auth/LoginScreen";
import Home from './Screens/Home';
import * as Font from "expo-font";
import { AppLoading } from "expo";

const loadApplication = async () => {
  await Font.loadAsync({
    "DMMono-Regular": require("./assets/fonts/DMMono-Regular.ttf"),
  });
};

const MainStack = createStackNavigator(); // указывает на группу навигаторов


export default function App() {
  const [iasReady, setIasReady] = useState(false);

  // if (!iasReady) {
  //   return (
  //     <AppLoading
  //       startAsync={loadApplication}
  //       onFinish={() => setIasReady(true)}
  //       onError={console.warn}
  //     />
  //   );
  // }

    return (
      <NavigationContainer>
        <MainStack.Navigator initialRouteName="Home">
          <MainStack.Screen  options={{
            headerShown: false,
          }}
            name="Registration" component={RegistrationScreen} />
          <MainStack.Screen  options={{
            headerShown: false,
          }}
            name="Login" component={LoginScreen} />
          {/* <MainStack.Screen name="Home"  options={{
            headerShown: false,
          }} 
          component={Home} /> */}
        </MainStack.Navigator>
      </NavigationContainer>
    );
  };
