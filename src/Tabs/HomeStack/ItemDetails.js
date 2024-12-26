import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const ItemDetails = ({ route }) => {
  console.log(route);
  return (
    <View>
      <Image
        source={{ uri: route.params.imagePath }}
        width={"100%"}
        height={130}
      />
      <Text>{route.params.name}</Text>
      <Text>{route.params.price}</Text>
    </View>
  );
};

export default ItemDetails;

const styles = StyleSheet.create({});
