import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";

export default function MyTouchable() {
  const handlePress = () => {
    console.log("Pressed!");
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.touchable}>
      <Image source={require("../assets/favicon.png")} />
      <Text style={styles.touchableText}>Click me!</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchable: {
    backgroundColor: "dimgrey",
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  touchableText: {
    color: "white",
  },
});
