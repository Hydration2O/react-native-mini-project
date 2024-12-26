import { Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsPage from "../Tabs/SettingsStack/SettingsPage";
import HomePage from "../Tabs/HomeStack/HomePage";
import ItemDetails from "../Tabs/HomeStack/ItemDetails";
import ProfilePage from "../Tabs/ProfileStack/ProfilePage";
import ProfileEditPage from "../Tabs/ProfileStack/ProfileEditPage";
import HomeNavigation from "./HomeNavigation";
import ProfileNavigation from "./ProfileNavigation";

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ header: () => false }}>
      <Tab.Screen name="Home" component={HomeNavigation} />
      <Tab.Screen name="Settings" component={SettingsPage} />
      <Tab.Screen name="Profile" component={ProfileNavigation} />
    </Tab.Navigator>
  );
};

export default MainNavigation;
