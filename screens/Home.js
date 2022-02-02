import React from "react";
import { View, Text, Button, ScrollView } from "react-native";

import GoalList from "../components/Goal/GoalList";

import { CATEGORIES, GOALS } from "../util/data";

const Home = (props) => {
  const filterList = (header, data) => {
    const filteredData = data.filter((item) => item.status === header);

    return filteredData;
  };

  const lists = CATEGORIES.map((category) => (
    <GoalList
      key={category}
      header={category}
      list={filterList(category, GOALS)}
    />
  ));

  return (
    <ScrollView style={{ backgroundColor: "#deeefc" }}>{lists}</ScrollView>
  );
};

export default Home;
