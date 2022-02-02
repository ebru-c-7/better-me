// import "react-native-gesture-handler";
import {
  useFonts,
  Mulish_200ExtraLight,
  Mulish_300Light,
  Mulish_400Regular,
  Mulish_900Black,
} from "@expo-google-fonts/mulish";
import AppLoading from "expo-app-loading";
import { StyleSheet } from "react-native";

import BottomTabStack from "./navigation/BottomTabStack";

export default function App() {
  const [isFontsLoaded] = useFonts({
    Mulish_200ExtraLight,
    Mulish_300Light,
    Mulish_400Regular,
    Mulish_900Black,
  });

  if (!isFontsLoaded) {
    return <AppLoading />;
  }

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
