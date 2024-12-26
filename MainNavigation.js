import { Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsPage from "./src/Tabs/SettingsStack/SettingsPage";
import HomePage from "./src/Tabs/HomeStack/HomePage";
import ItemDetails from "./src/Tabs/HomeStack/ItemDetails";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  const TabNav = () => {
    return (
      <Tab.Navigator screenOptions={{ header: () => false }}>
        <Tab.Screen name="Homepage" component={HomePage} />
        <Tab.Screen name="Settings" component={SettingsPage} />
      </Tab.Navigator>
    );
  };

  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={TabNav} />
      <Stack.Screen name="ItemDetails" component={ItemDetails} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
