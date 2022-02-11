import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TextItem from "../Text/TextItem";
import { menuContent } from "./menuItems";

const PopupMenu = (props) => {
  const { isOpen, onOpen, onClose, status } = props;

  const items = menuContent[status].map((item) => {
    return (
      <TouchableOpacity
        key={item.text}
        style={styles.item}
        activeOpacity={0.8}
        onPress={(e) => {
          item.onPress();
          onClose();
        }}
      >
        <TextItem style={{ ...styles.text, ...item.style }}>
          {item.text}
        </TextItem>
      </TouchableOpacity>
    );
  });

  return <View style={styles.menuContainer}>{items}</View>;
};

const styles = StyleSheet.create({
  menuContainer: {
    position: "absolute",
    top: 35,
    right: 20,
    borderRadius: 10,
    overflow: "hidden",
    // paddingVertical: 10,
    backgroundColor: "white",
  },
  item: {
    paddingVertical: 10,
    paddingLeft: 15,
    paddingRight: 25,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },
  text: {
    fontSize: 15,
  },
});

export default PopupMenu;
