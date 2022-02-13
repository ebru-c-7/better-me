import React, { useState } from "react";

import InputItem from "../UI/InputItem";
import { StyleSheet } from "react-native";
import DropDown from "../UI/DropDown";
import { GOAL_CATEGORIES, GOAL_STATUS } from "../../util/data";

const NewGoalForm = (props) => {
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");

  return (
    <>
      <InputItem placeholder={"Title"} />
      <InputItem
        placeholder="Description"
        multiline
        numberOfLines={3}
        maxLength={120}
      />
      <DropDown
        items={GOAL_CATEGORIES}
        value={category}
        onChange={(val) => setCategory(val)}
      />
      <DropDown
        items={GOAL_STATUS}
        value={status}
        onChange={(val) => setStatus(val)}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default NewGoalForm;
