import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

const ProductCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.imagePath }} width={"100%"} height={130} />
      <Text>{item.name}</Text>
      <Text>{item.Price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flexWrap: "wrap",
    flexDirection: "column",
    // backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    width: "45%",
    margin: 5,
  },
});

export default ProductCard;
