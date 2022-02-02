import 'react-native-gesture-handler';

import { StyleSheet, Text, View } from "react-native";

import BottomTabStack from "./navigation/BottomTabStack";

export default function App() {
  return <BottomTabStack />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
