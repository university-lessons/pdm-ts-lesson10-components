import { View, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";
import React, { PropsWithChildren } from "react";

type CardProps = {
  style?: StyleProp<ViewStyle>;
} & PropsWithChildren;

export default function Card({ style, children }: CardProps) {
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    gap: 16,
  },
});
