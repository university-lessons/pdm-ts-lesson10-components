import { Picker } from "@react-native-picker/picker";
import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";

const PICKER_VALUES = [
  { value: "orange", label: " Orange Laranja" },
  { value: "apple", label: " Apple Maçã" },
  { value: "banana", label: " Banana Banana" },
];

export default function App() {
  const [sw, setSw] = useState(false);
  const [txt, setTxt] = useState("");

  // const pkRef = useRef<Picker<string> | null>(null);

  const [pkVal, setPkVal] = useState("apple");

  console.log(txt);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />

      <TextInput secureTextEntry={true} value={txt} onChangeText={setTxt} />

      <Switch value={sw} onValueChange={setSw} />

      <Picker
        // ref={pkRef}
        selectedValue={pkVal}
        onValueChange={(itemValue, itemIndex) => {
          setPkVal(itemValue);
          console.log(itemIndex);
        }}
      >
        {PICKER_VALUES.map((p) => (
          <Picker.Item value={p.value} label={p.label} key={p.value} />
        ))}

        {/* <Picker.Item value="orange" label="Orange" />
        <Picker.Item value="apple" label="Apple" />
        <Picker.Item value="strawberry" label="Strawberry" /> */}
      </Picker>

      {/* <Button
        onPress={() => {
          pkRef.current?.focus();
        }}
        title="Open Picker"
      /> */}

      <Text>
        {sw ? "sim" : "não"} {txt} {pkVal}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: "black",
    paddingTop: 16,
  },
});
