import { useEffect, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const QuizButton = ({
  setInitalScrollIndex,
  setActive,
  numOfItems,
  setQuizCard,
  active,
}) => {
  const [randomIndex, setRandomIndex] = useState(0);
  const [hit, setHit] = useState(false);

  useEffect(() => {
    setRandomIndex(Math.floor(Math.random() * numOfItems + 1));
  }, [hit]);

  return (
    <TouchableOpacity
      style={[styles.buttonContainer, { position: "absolute" }]}
      onPress={() => {
        setInitalScrollIndex(randomIndex);
        setActive(randomIndex);
        setQuizCard(randomIndex);
        setHit(!hit);
        console.log("Quiz Button Hit!");
      }}
    >
      <View
        style={{
          width: 50,
          height: 50,
          borderRadius: 40,
          backgroundColor: "#850d27",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 30, color: "white" }}>Q</Text>
      </View>
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
