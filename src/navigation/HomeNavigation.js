import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ItemDetails from "../Tabs/HomeStack/ItemDetails";
import ProfileEditPage from "../Tabs/ProfileStack/ProfileEditPage";
import HomePage from "../Tabs/HomeStack/HomePage";

const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="ItemDetails" component={ItemDetails} />
      <Stack.Screen name="ProfileEditPage" component={ProfileEditPage} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;

const styles = StyleSheet.create({});
