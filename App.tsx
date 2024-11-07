import Constants from "expo-constants";
import { useState } from "react";
import {
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import FormInput from "./components/FormInput";

export default function App() {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");

  console.log(text);

  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <View style={styles.container}>
          <FormInput value={text} onChangeText={setText} />

          <FormInput value={text} onChangeText={setText} label="Username" />

          <FormInput
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            error="Password mismatch!"
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: Constants.statusBarHeight,
    height: Dimensions.get("screen").height,
  },
});
