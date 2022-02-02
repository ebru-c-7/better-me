import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import i18n from "../localization";

import HomeStack from "./HomeStack";
import SearchScreen from "../screens/Search";
import OverviewScreen from "../screens/Overview";

const BottomTabStack = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: i18n.t("Home"),
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={18} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarLabel: i18n.t("Search"),
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="md-glasses-outline" size={28} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Overview"
          component={OverviewScreen}
          options={{
            tabBarLabel: i18n.t("Overview"),
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="ios-stats-chart-outline"
                size={20}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default BottomTabStack;
