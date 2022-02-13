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
import { Provider } from "react-redux";

import BottomTabStack from "./navigation/BottomTabStack";
import { store } from "./store/store";

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

  return (
    <Provider store={store}>
      <BottomTabStack />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
