import React, { useEffect, useRef, useState } from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import ExpandableComponent from "./ExpandableComponent";
import QuizButton from "./QuizButton";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Cards = ({ cardData, index }) => {
  const scrollRef = useRef(null);
  const [listDataSource, setlistDataSource] = useState(cardData);

  const [active, setActive] = useState(null);
  const [initialScrollIndex, setInitalScrollIndex] = useState(0);

  console.log("initialScrollIndex1: ", initialScrollIndex);

  useEffect(() => {
    console.log("initialScrollIndex2: ", initialScrollIndex);
    //added promise to solve invarient violation scrollToIndex needs getLayout...
    const wait = new Promise((resolve) => setTimeout(resolve, 200));
    wait
      .then(() =>
        scrollRef.current?.scrollToIndex({
          index: initialScrollIndex,
          animated: true,
        })
      )
      .catch(() => console.log("Promise Rejection in FlashCard"));
  }, [initialScrollIndex]);

  return (
    <View style={styles.container}>
      <FlatList
        ref={scrollRef}
        data={listDataSource}
        initialScrollIndex={initialScrollIndex}
        renderItem={({ item, index }) => (
          //   <Text>adsg</Text>
          <ExpandableComponent
            key={index}
            item={item}
            active={active}
            setActive={setActive}
            index={index}
          />
        )}
      />
      <QuizButton
        scrollRef={scrollRef}
        setInitalScrollIndex={setInitalScrollIndex}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { display: "flex" },
  itemContainer: {
    flex: 1,
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#1c1c1c",
  },
  item: {
    // backgroundColor: "orange",
    // width: "100%",
    // height: 100,
  },
  itemText: {
    // padding: 5,

    fontSize: 25,
    fontWeight: "500",
    color: "white",
  },
  content: {
    // paddingLeft: 10,
    // paddingRight: 10,
    // backgroundColor: "#fff",
    // height: "100%",
  },
  //   seperator: {
  //     height: 0.5,
  //     // backgroundColor: "#c8c8",
  //     width: "100%",
  //   },
  text: {
    // color: "#007278",
    color: "white",
    fontSize: 16,
    padding: 10,
  },
  image: {
    // flex: 1,
    width: "100%",
    resizeMode: "contain",

    // width: "100%",
  },
});

export default Cards;
