import { StatusBar } from "expo-status-bar";
import { ReactNode } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

type ScreenWrapperProps = {
  children: ReactNode;
};

export default function ScreenWrapper({ children }: ScreenWrapperProps) {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />

      <SafeAreaView style={styles.container}>
        <ScrollView>{children}</ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#333",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
