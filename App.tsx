import { Picker } from "@react-native-picker/picker";
import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import {
  Button,
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import MyForm from "./components/MyForm";
import MyTouchable from "./components/MyTouchable";

const PICKER_VALUES = [
  { value: "orange", label: " Orange Laranja" },
  { value: "apple", label: " Apple Maçã" },
  { value: "banana", label: " Banana Banana" },
];

export default function App() {
  const handlePress = () => {
    console.log("Pressed!");
  };

  const handleLogin = (
    username: string,
    password: string,
    remember: boolean
  ) => {
    console.log("Login for: ", username, password, remember);
  };

  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Header!</Text>

          <Button onPress={handlePress} title="Press Me!" />

          <MyTouchable />

          <MyForm title="My Login Form" onSubmit={handleLogin} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    backgroundColor: "grey",
  },
  header: {
    fontWeight: "bold",
  },
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
