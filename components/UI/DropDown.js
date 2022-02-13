import React from "react";
import { StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const DropDown = (props) => {
  return (
    <Picker
      selectedValue={props.value}
      onValueChange={props.onChange}
      style={styles.dropdown}
    >
      {props.items.map((item) => (
        <Picker.Item key={item.value} label={item.label} value={item.value} />
      ))}
    </Picker>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default DropDown;
