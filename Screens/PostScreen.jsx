import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { moduleName } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import DefaultPostsScreen from "./DefaultPostsScreen";
import MapScreen from "./MapScreen";
import CommentsScreen from "./CommentsScreen";

const NestedScreen = createStackNavigator();

const PostScreen = () => {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="DefaultScreen"
        component={DefaultPostsScreen}
      />
      <NestedScreen.Screen name="CommentsScreen" component={CommentsScreen} />
      <NestedScreen.Screen name="MapScreen" component={MapScreen} />
    </NestedScreen.Navigator>
  );
};
export default PostScreen;
