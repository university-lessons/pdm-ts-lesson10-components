import Constants from "expo-constants";
import {
  Button,
  Dimensions,
  Image,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
import SignUpForm from "./components/SignUpForm";
import Logo from "./components/Logo";
import FormInput from "./components/FormInput";

export default function App() {
  return (
    <View style={styles.container}>
      <Logo width={200} height={70} />

      <SignUpForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    alignItems: "center",
    justifyContent: "center",
  },
});
