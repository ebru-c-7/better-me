import React from "react";
import { View, Text } from "react-native";

const Detail = ({ navigation, route }) => {
  const {
    item: { title },
  } = route.params;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Detail Screen for {title}</Text>
    </View>
  );
};

export default Detail;
