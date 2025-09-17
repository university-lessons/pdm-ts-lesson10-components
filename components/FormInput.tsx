import React from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import Title from "./Title";

type FormInputProps = {
  label?: string;
  error?: string;
} & TextInputProps;

export default function FormInput({ label, error, ...rest }: FormInputProps) {
  return (
    <View style={styles.container}>
      {label && <Title>{label}</Title>}

      <TextInput
        style={styles.inputContainer}
        {...rest}
        placeholderTextColor="lightgray"
      />

      {error && (
        <Title c="red" fz={12}>
          {error}
        </Title>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  inputContainer: {
    backgroundColor: "dimgray",
    borderRadius: 6,
    color: "white",
  },
});
