import { View, Text, StyleSheet } from "react-native";
import React from "react";

type TitleProps = {
  children: React.ReactNode;
};

export default function Title({ children }: TitleProps) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: { fontSize: 18, fontWeight: "bold" },
});
