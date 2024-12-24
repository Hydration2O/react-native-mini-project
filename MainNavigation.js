import { Text, View } from "react-native";
import React from "react";
import HomeNavigation from "./StackNavs/HomeNavigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsNavigation from "./StackNavs/SettingsNavigation";

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ header: () => false }}>
      <Tab.Screen name="Home" component={HomeNavigation} />
      <Tab.Screen name="Settings" component={SettingsNavigation} />
    </Tab.Navigator>
  );
};

export default MainNavigation;
