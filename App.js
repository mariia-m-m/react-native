import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "./Screens/RegistrationScreen"
import LoginScreen from "./Screens/LoginScreen"
import Home from './Screens/Home';

const MainStack = createStackNavigator(); // указывает на группу навигаторов

export default () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Home">/* Замена Switch */
        <MainStack.Screen name="Registration" component={RegistrationScreen} />/* Замена Route */
        <MainStack.Screen name="Login" component={LoginScreen} />
        <MainStack.Screen name="Home" component={Home} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};


