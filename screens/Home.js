import React from "react";
import { ScrollView, StyleSheet, Dimensions } from "react-native";
import { useSelector } from "react-redux";

import GoalList from "../components/Goal/GoalList";
import CustomHead from "../components/Home/CustomHead";
import Page from "../components/Page/Page";

const Home = (props) => {
  const goals = useSelector((state) => state.goalsState.goals);
  const status = useSelector((state) => state.goalsState.status);

  const filterList = (header, data) => {
    const filteredData = data.filter((item) => item.status === header);

    return filteredData;
  };

  const lists = status.map((stat) => (
    <GoalList key={stat} header={stat} list={filterList(stat, goals)} />
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
