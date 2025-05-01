import { View, Text } from "react-native";
import React, { PropsWithChildren } from "react";

type FlexProps = {
  justify?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around";
  align?: "flex-start" | "center" | "flex-end" | "stretch";
  gap?: number;
  direction?: "row" | "column";
} & PropsWithChildren;

export default function Flex({
  children,
  justify,
  align,
  gap,
  direction,
}: FlexProps) {
  return (
    <View
      style={{
        justifyContent: justify,
        alignItems: align,
        gap,
        flexDirection: direction,
      }}
    >
      {children}
    </View>
  );
}
