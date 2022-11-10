import { useEffect, useState } from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const QuizButton = ({ scrollRef }) => {
  const [hit, setHit] = useState(false);

  useEffect(() => {
    let randomIndex = Math.floor(Math.random() * 60 + 1);
    scrollRef.current?.scrollToIndex({
      index: randomIndex,
      animated: true,
    });
  }, [hit]);

  return (
    <TouchableOpacity
      style={[styles.buttonContainer, { position: "absolute" }]}
      onPress={() => {
        setHit(!hit);
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
