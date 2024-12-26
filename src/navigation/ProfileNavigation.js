import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfilePage from "../Tabs/ProfileStack/ProfilePage";
import ProfileEditPage from "../Tabs/ProfileStack/ProfileEditPage";
const Stack = createNativeStackNavigator();

const ProfileNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfilePage} />
      <Stack.Screen name="ProfileEditPage" component={ProfileEditPage} />
    </Stack.Navigator>
  );
};

export default ProfileNavigation;

const styles = StyleSheet.create({});
