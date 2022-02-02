import React from "react";

import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const AddButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Ionicons name="md-add-circle" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default AddButton;
