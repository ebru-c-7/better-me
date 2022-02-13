import React from "react";
import { StyleSheet, TextInput } from "react-native";

const InputItem = (props) => {
  const addedStyle = props.style ? props.style : {};

  return <TextInput {...props} style={{ ...styles.input, ...addedStyle }} />;
};

const styles = StyleSheet.create({
  input: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default InputItem;
