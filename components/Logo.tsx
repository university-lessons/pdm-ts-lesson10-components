import React from "react";
import { Image, StyleSheet } from "react-native";

type LogoProps = {
  width: number;
  height: number;
};

export default function Logo({ width, height }: LogoProps) {
  return (
    <Image
      source={{
        uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png",
      }}
      style={[styles.image, { width, height }]}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    resizeMode: "contain",
  },
});
