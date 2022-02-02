import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AddButton from "./AddButton";

const CustomHead = (props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <AddButton
        onPress={() => {
          navigation.navigate("NewGoal");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    paddingVertical: 40,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default CustomHead;
