import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { useRoute } from "./router";
import { Provider } from '@reduxjs/toolkit';
import {store} from "./redux/store"



// const loadApplication = async () => {
//   await Font.loadAsync({
//     "DMMono-Regular": require("./assets/fonts/DMMono-Regular.ttf"),
//   });
// };

export default function App() {
  const [iasReady, setIasReady] = useState(false);
  const routing = useRoute(true);
  // if (!iasReady) {
  //   return (
  //     <AppLoading
  //       startAsync={loadApplication}
  //       onFinish={() => setIasReady(true)}
  //       onError={console.warn}
  //     />
  //   );
  // }

  return <Provider store = {store}><NavigationContainer>{routing}</NavigationContainer></Provider>;
}

