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

console.log("Clean DATA - first object: ", DATA[1]);
// const jlines = readJsonLines(jLinesFile);
// const DATA = require("./drink_list.json");

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar style="light" />
        <Text style={styles.title}>Drinks</Text>

        <Cards cardData={DATA} />
        {/* <FlatList
          style={{
            // width: "95%",
            // display: "flex",
            // position: "relative",
            backgroundColor: "#292929",
          }}
          // snapToAlignment="start"
          ListHeaderComponent={() => {
            return (
              <View
                style={{
                  height: 20,
                  width: 10,
                }}
              />
            );
          }}
          data={DATA}
          renderItem={({ item, index }) => (
            <FlashCard cardData={item} key={index} index={index} />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => {
            return (
              <View
                style={{
                  height: 20,
                  width: 10,
                }}
              />
            );
          }}
          // snapToAlignment="start"
          // decelerationRate={0.1}
          // snapToInterval={height * 0.1 + 20}
          // scrollEventThrottle={16}
        /> */}
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
  },
  title: {
    alignSelf: "center",
    fontSize: 35,
    color: "white",
    margin: 5,
    paddingBottom: 15,
  },
});