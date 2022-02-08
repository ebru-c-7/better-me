import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ButtonItem from "./ButtonItem";

const PopupMenu = (props) => {
  const { isOpen, onOpen, onClose } = props;

  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity
        style={{ backgroundColor: "blue", width: "100%" }}
        onPress={(e) => {
          console.log("clicked -1");
          onClose();
        }}
      >
        <Text>Option -1</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ backgroundColor: "white", width: "100%" }}
        onPress={(e) => {
          console.log("clicked 1");
          onClose();
        }}
      >
        <Text>Option 1</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ backgroundColor: "pink", width: "100%" }}
        onPress={(e) => {
          console.log("clicked 2");
          onClose(e);
        }}
      >
        <Text>Option 2</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    elevation: 20,
    width: 150,
    height: 150,
    position: "absolute",
    top: 35,
    right: 20,
  },
});

export default PopupMenu;
