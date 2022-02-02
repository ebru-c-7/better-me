import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from '@expo/vector-icons'; 

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

  if (id === "new") {
    return (
      <TouchableOpacity onPress={newGoalHandler} style={styles.item}>
        <View>
        <FontAwesome5 name="plus" size={24} color="black" />
          <Text>Add New</Text>
          <Text numberOfLines={2} style={styles.description}>
            {""}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity onPress={pressHandler} style={styles.item}>
      <View>
        <Image
          source={{ uri: image }}
          style={styles.image}
          resizeMode="cover"
        />
        <Text>{title}</Text>
        <Text numberOfLines={2} style={styles.description}>
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    width: 140,
    padding: 10,
    margin: 5,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 5,
    // height: "100%"
  },
  image: {
    height: 100,
    width: 120,
    borderRadius: 10,
  },
  title: {},
  description: {
    width: "100%",
  },
});

export default GoalItem;
