import React from "react";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const AddButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} activeOpacity={0.7}>
      <Feather name="plus" size={45} color="black" />
    </TouchableOpacity>
  );
};

export default AddButton;
