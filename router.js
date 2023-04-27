import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

import LoginScreen from "./Screens/auth/LoginScreen";
import RegistrationScreen from "./Screens/auth/RegistrationScreen";
import PostsScreen from "./Screens/PostsScreen";
import CommentsScreen from "./Screens/CommentsScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import CreateScreen from "./Screens/CreateScreen";

// icons import
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 



export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={LoginScreen}
        />
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Registration"
          component={RegistrationScreen}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator tabBarOptions={{ showLabel: false }}>
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
        <AntDesign name="appstore-o" size={24} color="black" />
          ),
        }}
        name="Posts"
        component={PostsScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
           <Fontisto name="plus-a" size={24} color="black" backgroundColor="FF6C00" iconStyle='{marginRight: 10}' borderRadius="5" />
          ),
        }}
        name="Create"
        component={CreateScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
      <Ionicons name="md-person-outline" size={24} color="black" />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};

