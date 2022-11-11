import { useEffect, useState } from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const QuizButton = ({ scrollRef, setInitalScrollIndex }) => {
  const [hit, setHit] = useState(false);
  //   const [randomIndex] = useState(Math.floor(Math.random() * 60 + 1));

  let randomIndex = Math.floor(Math.random() * 60 + 1);
  //   let randomIndex = 4;
  //   useEffect(() => {
  //     //     setInitalScrollIndex(randomIndex);
  //     //     // scrollRef.current?.scrollToIndex({
  //     //     //   index: randomIndex ? randomIndex : 0,
  //     //     //   animated: true,
  //     //     //   viewPosition: 0.5,
  //     //     // });
  //   }, []);

  return (
    <TouchableOpacity
      style={[styles.buttonContainer, { position: "absolute" }]}
      onPress={() => {
        setHit(!hit);
        setInitalScrollIndex(randomIndex);
        console.log("Quiz Button Hit!");
      }}
    >
      <View
        style={{
          width: 50,
          height: 50,
          borderRadius: 40,
          backgroundColor: "red",
        }}
      ></View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    right: 30,
    top: height - 300,
  },
});
export default QuizButton;
