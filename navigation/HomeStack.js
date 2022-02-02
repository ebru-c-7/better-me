import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import i18n from "../localization";

import HomeScreen from "./../screens/Home";
import DetailScreen from "./../screens/Detail";
import NewGoalScreen from "../screens/NewGoal";

const HomeStack = ({ navigation: { navigate } }) => {
  const HomeStack = createNativeStackNavigator();

  return (
    <HomeStack.Navigator
      screenOptions={{
        animation: "slide_from_right",
        // headerTitleAlign: "center",
        headerShown: false,
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={
          {
            // title: i18n.t("Home"),
            // headerRight: () => {
            //   return (
            //     <AddButton
            //       onPress={() => {
            //         navigate("NewGoal");
            //       }}
            //     />
            //   );
            // },
          }
        }
      />
      <HomeStack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="NewGoal"
        component={NewGoalScreen}
        options={{ title: i18n.t("New Goal") }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStack;
