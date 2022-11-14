import { StatusBar } from "expo-status-bar";
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native";
import FlashCard from "./components/FlashCard";
import readJsonLines from "read-json-lines-sync";
import Cards from "./components/FlashCard";

// var jsonlines = require("jsonlines");
// var parser = jsonlines.parse();

const RAW_DATA = require("./drink_list");
//sort Data alphabeticaly
const DATA = RAW_DATA.sort((a, b) => (a.name > b.name ? 1 : -1));

// const getDrinks = () => {
//   let drinks = [];
//   DATA.map((item, index) => {
//     const keys = Object.keys(item);
//     keys.map((k, i) => {
//       if (
//         k === "ingredient1" ||
//         k === "ingredient2" ||
//         k === "ingredient3" ||
//         k === "ingredient4" ||
//         k === "ingredient5" ||
//         k === "ingredient6"
//       ) {
//         drinks.push(item[k].name);
//       }
//     });
//   });
//   drinks = [...new Set(drinks)];
//   drinks = drinks.sort((a, b) => {
//     if (a < b) {
//       return -1;
//     }
//     if (a > b) {
//       return 1;
//     }
//     return 0;
//   });
//   return drinks;
// };
// const drinks = getDrinks();
// console.log("getDrinks: ", drinks);

console.log("Clean DATA - first object: ", DATA[1]);

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar style="light" />
        <Text style={styles.title}>Drinks</Text>
        <Cards cardData={DATA} />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#121212",
    // alignItems: "center",
    // justifyContent: "center",
    width: width,
    height: height,
    position: "absolute",
  },
  title: {
    alignSelf: "center",
    fontSize: 35,
    color: "white",
    margin: 5,
    paddingBottom: 15,
  },
});
