import { Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsPage from "../Tabs/SettingsStack/SettingsPage";
import HomePage from "../Tabs/HomeStack/HomePage";
import ItemDetails from "../Tabs/HomeStack/ItemDetails";
import ProfilePage from "../Tabs/ProfileStack/ProfilePage";
import ProfileEditPage from "../Tabs/ProfileStack/ProfileEditPage";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  const TabNav = () => {
    return (
      <Tab.Navigator screenOptions={{ header: () => false }}>
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Settings" component={SettingsPage} />
        <Tab.Screen name="Profile" component={ProfilePage} />
      </Tab.Navigator>
    );
  };

  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={TabNav} />
      <Stack.Screen name="ItemDetails" component={ItemDetails} />
      <Stack.Screen name="ProfileEditPage" component={ProfileEditPage} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
