import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//! Screens
import LoginScreen from "./Screens/auth/LoginScreen";
import RegisterScreen from "./Screens/auth/RegisterScreen";
import CreateScreen from "./Screens/CreateScreen";
import PostScreen from "./Screens/PostScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import ContactsScreen from "./Screens/CommentsScreen";
// icons import
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 

const MainTab = createBottomTabNavigator();
const AuthStack = createNativeStackNavigator();
const useRoute = (isLogin) => {
  if (!isLogin) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        <AuthStack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
      </AuthStack.Navigator>
    );
  }
  return (
     <MainTab.Navigator tabBarOptions={{ showLabel: false }}>
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
        <AntDesign name="appstore-o" size={24} color= {color}  />
          ),
        }}
        name="Posts"
        component={PostScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
           <Fontisto name="plus-a" size={24} color= {color}  backgroundColor="FF6C00" iconStyle='{marginRight: 10}' borderRadius="5" />
          ),
        }}
        name="Create"
        component={CreateScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
      <Ionicons name="md-person-outline" size={24} color= {color}  />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};
export default useRoute;
