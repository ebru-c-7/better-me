import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import TextItem from "../Text/TextItem";

const GoalItem = ({ item }) => {
  const { id, title, image, description, progress, onPress } = item;

  const navigation = useNavigation();

  const pressHandler = () => {
    navigation.navigate("Detail", {
      item,
    });
  };

  const newGoalHandler = () => {
    navigation.navigate("NewGoal");
  };

  if (id === "new-00" || id === "new-01") {
    const newTitle = id === "new-00" ? "Let's Start" : "One More";

    return (
      <TouchableOpacity
        onPress={newGoalHandler}
        style={styles.item}
        activeOpacity={0.7}
      >
        <View style={{ ...styles.image, ...styles.newItem }}>
          <FontAwesome5 name="plus" size={50} color="#3b3b3bb3" />
        </View>
        <TextItem bold style={{ ...styles.title, ...styles.newTitle }}>
          {newTitle}
        </TextItem>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      onPress={pressHandler}
      style={styles.item}
      activeOpacity={0.8}
    >
      <View>
        <Image
          source={{ uri: image }}
          style={styles.image}
          resizeMode="cover"
        />
        <TextItem bold style={styles.title}>
          {title}
        </TextItem>
        <TextItem thin numberOfLines={2} style={styles.description}>
          {description}
        </TextItem>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    width: 180,
    padding: 5,
    // margin: 5,
  },
  image: {
    width: 160,
    height: 200,
    borderRadius: 10,
    backgroundColor: "#d3cfcfbf",
  },
  newItem: {
    justifyContent: "center",
    alignItems: "center",
  },
  newTitle: {
    textAlign: "center",
  },
  title: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 18,
  },
  description: {
    width: "100%",
    fontSize: 12,
  },
});

export default GoalItem;
