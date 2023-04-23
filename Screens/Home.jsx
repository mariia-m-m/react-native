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
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { useState } from "react";

const initialState = {
  login: "",
  email: "",
  password: "",
};

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import PostScreen from "./PostScreen";
import ProfileScreen from "./ProfileScreen";
import CommentScreen from "./CommentsScreen";

function Settings() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile!</Text>
    </View>
  );
}

const Tabs = createBottomTabNavigator();

const Home = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Profile") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "ios-list-box" : "ios-list";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen name="PostScreen" component={PostScreen} />
      <Tabs.Screen name="CommentScreen" component={CommentScreen} />
      <Tabs.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;

// export default function Home() {
//   const [state, setState] = useState(initialState);

//   return (
//     <View style={styles.container}>
//       <TouchableWithoutFeedback>
//         <View style={styles.header}>
//           <View style={styles.ava}></View>
//           <Text>Публикации</Text>
//         </View>
//         <View>
//           <Image
//             source={require("../assets/images/User.jpg")}
//             style={{ width: 60, height: 60 }}
//           />
//           <Text
//             style={{
//               fontSize: 15,
//               textShadow: "rgba(0, 0, 0, 0.25)",
//             }}
//           >
//             Natali Romanova
//           </Text>
//           <Image
//             source={require("../assets/images/Rectangle.jpg")}
//             style={{ width: 343 }}
//           />
//           <Text
//             style={{
//               fontSize: 12,
//               textShadow: "rgba(0, 0, 0, 0.25)",
//             }}
//           >
//             Лес
//           </Text>
//           <Image
//             source={require("../assets/images/Rectangle2.png")}
//             style={{ width: 343 }}
//           />
//           <Text
//             style={{
//               fontSize: 12,
//               textShadow: "rgba(0, 0, 0, 0.25)",
//             }}
//           >
//             Море
//           </Text>
//         </View>
//         <TouchableOpacity activeOpacity={0.7} style={styles.btn}>
//           <Text style={styles.btnTitle}>+</Text>
//         </TouchableOpacity>
//       </TouchableWithoutFeedback>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   image: {
//     flex: 1,
//     resizeMode: "cover",
//     justifyContent: "flex-end",
//     // alignItems: "center",
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#f0f8ff",
//     height: 50,
//     borderRadius: 8,
//     backgroundColor: "#F6F6F6",
//   },
//   form: {
//     marginHorizontal: 16,
//   },
//   btn: {
//     marginHorizontal: 16,
//     backgroundColor: Platform.OS === "ios" ? "transparent" : "#FF6C00",
//     borderRadius: 100,
//     height: 51,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   btnTitle: {
//     color: "#FFFFFF",
//     fontFamily: "Roboto",
//     FontSize: 16,
//     LineHeight: 19,
//     marginBottom: 0,
//   },
//   header: {
//     alignItems: "center",
//   },
//   headerTitle: {
//     fontSize: 30,
//     color: "#f0f8ff",
//   },
//   ava: {
//     height: 120,
//     width: 132,
//     borderRadius: 16,
//     backgroundColor: "#F6F6F6",
//     marginBottom: 32,
//     alignItems: "center",
//     justifyContent: "center",
//     marginHorizontal: 127,
//   },
// });
