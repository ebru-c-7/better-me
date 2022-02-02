import React from "react";
import { StyleSheet, Text } from "react-native";

const TextItem = (props) => {
  const { children, style = {}, bold, thin, xthin } = props;

  const textStyle = { ...style, ...styles.text };
  if (bold) textStyle.fontFamily = "Mulish_900Black";
  if (thin) textStyle.fontFamily = "Mulish_300Light";
  if (xthin) textStyle.fontFamily = "Mulish_200ExtraLight";

  return (
    <Text {...props} style={textStyle}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Mulish_400Regular",
  },
});

export default TextItem;
