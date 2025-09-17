import React from "react";
import { ColorValue, StyleProp, Text, TextStyle } from "react-native";

type TitleProps = {
  children: React.ReactNode;
  c?: ColorValue;
  fz?: number;
  fw?: TextStyle["fontWeight"];
};

export default function Title({ children, c, fz, fw }: TitleProps) {
  const style: StyleProp<TextStyle> = {
    color: c || "white",
    fontSize: fz || 15,
    fontWeight: fw || "normal",
  };

  return <Text style={style}>{children}</Text>;
}
