import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsPage from "../src/Tabs/SettingsStack/SettingsPage";

const Stack = createNativeStackNavigator();

const SettingsNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={SettingsPage} />
    </Stack.Navigator>
  );
};

export default SettingsNavigation;

const styles = StyleSheet.create({});
