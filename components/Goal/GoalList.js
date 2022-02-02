import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import GoalItem from "./GoalItem";

const GoalList = ({ list, header }) => {
  const listWithPlus = [
    ...list,
    {
      id: "new",
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
      <Text>{header}</Text>
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
  },
  list: {},
});

export default GoalList;
