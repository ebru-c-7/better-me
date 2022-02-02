import React from "react";
import { ScrollView, StyleSheet, Dimensions } from "react-native";

import GoalList from "../components/Goal/GoalList";
import CustomHead from "../components/Home/CustomHead";
import Page from "../components/Page/Page";

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
    <Page Component={ScrollView} style={styles.container}>
      <CustomHead />
      {lists}
    </Page>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    paddingLeft: 10,
  },
});

export default Home;
