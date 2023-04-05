import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Switch,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import React, { useState } from "react";

interface MyFormProps {
  onSubmit: (username: string, password: string, remember: boolean) => void;
  title: string;
}

export default function MyForm({ onSubmit, title }: MyFormProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRememeber] = useState(true);

  const canSubmit = username.length === 0 || password.length === 0;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{title}</Text>

      {username.length === 0 && (
        <Text style={styles.error}>Username is mandatory!</Text>
      )}
      <TextInput
        placeholder="Your username here..."
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        secureTextEntry={true}
        placeholder="Your username here..."
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <View style={styles.switchContainer}>
        <Switch onValueChange={setRememeber} value={remember} />
        <Text>Remember-me</Text>
      </View>

      <Button
        // disabled={canSubmit}
        onPress={() => {
          if (username.length === 0) {
            Alert.alert("Error", "Username is not filled!");
            return;
          }

          if (password.length === 0) {
            Alert.alert("Error", "Password is not filled!");
            return;
          }

          onSubmit(username, password, remember);
        }}
        title="Login"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
    padding: 8,
    backgroundColor: "lightgrey",
    borderRadius: 16,
  },
  header: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "white",
    height: 48,
    borderRadius: 8,
    marginBottom: 16,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  error: {
    color: "red",
    marginTop: 8,
  },
});
