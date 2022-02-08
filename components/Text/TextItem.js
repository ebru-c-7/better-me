import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const TextItem = (props) => {
  const [numberOfLines, setNumberOfLines] = useState(props.numberOfLines);
  const { children, style = {}, bold, thin, xthin, expandableText } = props;

  const expandHandler = () => {
    return numberOfLines === 0
      ? setNumberOfLines(props.numberOfLines)
      : setNumberOfLines(0);
  };

  const textStyle = { ...style, ...styles.text };
  if (bold) textStyle.fontFamily = "Mulish_900Black";
  if (thin) textStyle.fontFamily = "Mulish_300Light";
  if (xthin) textStyle.fontFamily = "Mulish_200ExtraLight";

  if (expandableText) {
    return (
      <TouchableOpacity onPress={expandHandler} activeOpacity={0.8} >
        <Text {...props} style={textStyle} numberOfLines={numberOfLines}>
          {children}
        </Text>
      </TouchableOpacity>
    );
  }

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
