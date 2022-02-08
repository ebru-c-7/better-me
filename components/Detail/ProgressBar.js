import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TextItem from "../Text/TextItem";

const ProgressBar = (props) => {
  const { progress = 0, width = "100%" } = props;

  const containerStyle =
    progress === 0
      ? {
          ...styles.container,
          width,
          justifyContent: "center",
          alignItems: "center",
        }
      : {
          ...styles.container,
          width,
        };

  const progressStyle = {
    ...styles.progress,
    width: `${progress * 100}%`,
  };

  return (
    <View style={containerStyle}>
      {progress !== 0 && (
        <View style={progressStyle}>
          <TextItem thin style={styles.text}>{`${progress * 100}%`}</TextItem>
        </View>
      )}
      {progress === 0 && (
        <TextItem thin style={styles.text}>{`${progress * 100}%`}</TextItem>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 20,
    elevation: 10,
    backgroundColor: "transparent",
    borderRadius: 10,
    overflow: "hidden",
  },
  progress: {
    height: "100%",
    backgroundColor: "#619761ba",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 12,
  },
});

export default ProgressBar;
