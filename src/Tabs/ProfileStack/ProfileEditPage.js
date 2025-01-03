import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Switch,
} from "react-native";
import React, { useEffect, useState } from "react";
import MyProfile from "./ProfileData";
const ProfileEditPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [number, setnumber] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputField}
        value={inputValue}
        onChangeText={(text) => setInputValue(text)} // Handles text change
        placeholder="Name"
      />

      <TextInput
        style={styles.numberinputField}
        keyboardType="numeric"
        value={number}
        onChangeText={(text) => setnumber(text)} // Handles text change
        placeholder="networth"
      />
      <Button
        title="submit"
        onPress={() => {
          console.log("name: " + inputValue);
          console.log("networth: " + number + "kd");
        }}
      />

      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor="#f5dd4b"
        // ios_backgroundColor="#3e3e3e"
        onValueChange={() => {
          if (toggle) {
            setToggle(false);
          } else setToggle(true);

          console.log("alive: " + toggle);
        }}
        value={toggle}
      />
    </View>
  );
};
export default ProfileEditPage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputField: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
  },
  numberinputField: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
  },
});
