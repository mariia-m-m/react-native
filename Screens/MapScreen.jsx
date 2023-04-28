import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";

const MapScreen = () => (
  <>
    <View style={styles.container}>
      <Text>MapScreen</Text>
    </View>
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  </>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default MapScreen;
