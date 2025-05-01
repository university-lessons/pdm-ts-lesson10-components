import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
} from "react-native";
import React from "react";

type FormInputProps = {
  error?: string;
} & TextInputProps;

export default function FormInput({ error, ...rest }: FormInputProps) {
  return (
    <View style={styles.container}>
      <TextInput {...rest} />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 4,
    backgroundColor: "lightgray",
    width: "100%",
  },
  error: { color: "red", fontSize: 10 },
});
