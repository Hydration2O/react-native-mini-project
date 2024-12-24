import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SettingsPage from "../src/pages/SettingsPage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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
