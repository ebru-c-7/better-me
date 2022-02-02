import React from "react";
import { StyleSheet, View } from "react-native";

const Page = ({ Component, children, style }) => (
  <Component style={{ ...styles.container, ...style }}>{children}</Component>
);

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    backgroundColor: "#fff",
    paddingBottom: 25
  },
});

export default Page;
