import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import TextItem from "../Text/TextItem";
import GoalItem from "./GoalItem";

const GoalList = ({ list, header }) => {
  const listWithPlus = [
    ...list,
    {
      id: list && list.length > 0 ? "new-01" : "new-00",
      title: "",
      description: "",
      image: "",
      category: "",
      status: "",
      due: "",
      progress: 0,
    },
  ];

  return (
    <View style={styles.listItem}>
      <TextItem style={styles.header} bold>
        {header}
      </TextItem>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={listWithPlus}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={(itemData) => <GoalItem item={itemData.item} />}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    minHeight: 100,
    marginBottom: 30,
    marginTop: -10,
  },
  header: {
    fontSize: 25,
    marginLeft: 10,
    marginBottom: 20,
  },
  list: {},
});

export default GoalList;
