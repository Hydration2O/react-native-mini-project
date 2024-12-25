import { StatusBar } from "expo-status-bar";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import StoreList from "../../Components/storeList";
import ProductCard from "../../Components/ProductCard";

const scrollList = [
  { id: 1, title: "Notebook" },
  { id: 2, title: "Pen" },
  { id: 3, title: "Eraser" },
  { id: 4, title: "Office" },
  { id: 5, title: "Keyboard" },
  { id: 6, title: "Mouse" },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const productslist = StoreList.map((item) => <ProductCard item={item} />);
export default function HomePage() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.ScrollContainer}>
            <FlatList
              horizontal={true}
              data={scrollList}
              renderItem={({ item }) => <Item title={item.title} />}
              keyExtractor={(item) => item.id}
            />
          </View>
          <Text>this is the home screen</Text>

          <StatusBar style="auto" />
          <View style={styles.MainPage}>{productslist}</View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  ScrollContainer: {
    margin: 10,
    top: 0,
    height: 50,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    height: 50,
  },
  title: {
    fontSize: 20,
  },
  MainPage: {
    backgroundColor: "red",
    flexDirection: "row",
    // height: "100%",
    flexWrap: "wrap",
    // width: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
});
