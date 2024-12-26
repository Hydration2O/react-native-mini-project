import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from "react-native";

const ProductCard = ({ item, handelPress }) => {
  return (
    <TouchableOpacity
      style={styles.touchable}
      key={item.id}
      onPress={() => {
        handelPress(item);
      }}
    >
      <View style={styles.container}>
        <Image source={{ uri: item.imagePath }} width={"100%"} height={130} />
        <Text>{item.name}</Text>
        <Text>{item.Price}</Text>
      </View>
    </TouchableOpacity>
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
    width: 140,
    margin: 5,
  },
  touchable: {
    width: "45%",
    margin: 5,
  },
});

export default ProductCard;
