import React from "react";
import { Pressable, StyleSheet } from "react-native";
import TextItem from "../Text/TextItem";

const ButtonItem = (props) => {
  const { onPress = () =>{}, children, style = {}, noStyle } = props;

  const buttonStyle = noStyle ? style : { ...styles.button, ...style };

  return (
    <Pressable style={buttonStyle} onPress={onPress}>
      <TextItem style={styles.text}>{children}</TextItem>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default ButtonItem;
