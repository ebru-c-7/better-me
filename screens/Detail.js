import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import ProgressBar from "../components/Detail/ProgressBar";
import TextItem from "../components/Text/TextItem";
import ButtonItem from "../components/UI/ButtonItem";
import { COLORS } from "../util/colors";
import { Ionicons } from "@expo/vector-icons";
import PopupMenu from "../components/UI/PopupMenu";
import { Entypo } from "@expo/vector-icons";

const Detail = ({ navigation, route }) => {
  const {
    item: { id, title, description, image, category, status, due, progress },
  } = route.params;

  const goBackHandler = () => navigation.goBack();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={() => setIsMenuOpen(false)}>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.mainData}>
            <View style={styles.mainActionContainer}>
              <ButtonItem noStyle onPress={goBackHandler}>
                <Ionicons
                  style={styles.iconBack}
                  name="chevron-back"
                  size={24}
                  color="black"
                />
              </ButtonItem>
              <ButtonItem noStyle onPress={() => setIsMenuOpen(true)}>
                <Entypo name="dots-three-vertical" size={20} color="black" />
              </ButtonItem>
            </View>

            <View style={styles.imageContainer}>
              <Image
                source={{ uri: image }}
                resizeMode="cover"
                style={styles.image}
              />
            </View>
            <TextItem bold style={styles.title}>
              {title}
            </TextItem>
            <TextItem style={styles.category}>{category}</TextItem>
            <ProgressBar width={"70%"} progress={progress} />
          </View>
          <View style={styles.description}>
            <TextItem style={styles.descriptionHeader} bold>
              Note:
            </TextItem>
            <TextItem
              expandableText
              numberOfLines={3}
              thin
              style={styles.descriptionText}
            >
              {description}
            </TextItem>
          </View>
        </ScrollView>
        <View style={styles.actionContainer}>
          <ButtonItem style={styles.deleteButton}>Delete</ButtonItem>
          <ButtonItem style={styles.editButton}>Edit</ButtonItem>
        </View>
        {isMenuOpen && (
          <PopupMenu
            onOpen={() => setIsMenuOpen(true)}
            onClose={() => setIsMenuOpen(false)}
            status={status}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const wHeight = Dimensions.get("window").height;
const wWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    minHeight: "100%",
  },
  mainActionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 20,
    width: "100%",
    zIndex: 2,
    elevation: 15,
  },
  iconBack: {},
  mainData: {
    minHeight: wHeight * 0.5,
    backgroundColor: COLORS.layer,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  imageContainer: {
    width: wWidth * 0.6,
    height: wWidth * 0.6,
    elevation: 10,
    backgroundColor: "gray",
    borderRadius: wWidth * 0.6 * 0.5,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 18,
  },
  category: {
    marginBottom: 10,
    fontSize: 18,
  },
  description: {
    // justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    marginBottom: 60,
  },
  descriptionHeader: {
    width: "80%",
    marginBottom: 10,
  },
  descriptionText: {
    width: wWidth * 0.8,
    fontSize: 13,
    borderLeftWidth: 1,
    borderLeftColor: "black",
    paddingLeft: 10,
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  deleteButton: {
    backgroundColor: COLORS.warning,
  },
  editButton: {
    backgroundColor: COLORS.main,
  },
});

export default Detail;
