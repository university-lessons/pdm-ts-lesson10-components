import React from "react";
import { Button, StyleSheet, Text } from "react-native";
import Card from "./Card";
import FormInput from "./FormInput";
import Title from "./Title";
import { Switch } from "react-native";
import Flex from "./Flex";

export default function SignUpForm() {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  return (
    <Card style={styles.card}>
      <Title>Sign Up</Title>

      <FormInput
        error="Email invalid!"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <FormInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />

      <Flex direction="row" align="center">
        <Text>Subscribe to our newsletter</Text>
        <Switch />
      </Flex>

      <Button title="Lets Go!" />
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "80%",
    marginTop: 32,
  },
});
