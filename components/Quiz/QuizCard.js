import { useState } from "react";
import { View, Button, StyleSheet, Pressable, Text } from "react-native";

// export const quizifyItem = (item) => {
//   console.log("quizItem: ", item);

//   let quizItem = item;
//   const itemKeys = Object.keys(quizItem);
//   const randomKey = itemKeys[Math.floor(Math.random() * itemKeys.length)];
//   console.log("Quiz key: ", randomKey);
//   //ingredient based processing
//   if (
//     randomKey === "ingredient1" ||
//     randomKey === "ingredient2" ||
//     randomKey === "ingredient3" ||
//     randomKey === "ingredient4" ||
//     randomKey === "ingredient5" ||
//     randomKey === "ingredient6"
//   ) {
//     console.log("Quiz is on an ingredient");
//     console.log("The answer is ", item[randomKey]["name"]);
//     quizItem[randomKey]["name"] = "??????";
//     return quizItem;
//   }
//   return item;
// };

const QuizCard = ({ item, answer, resetCard }) => {
  const win = () => {
    console.log("You Won!");
    resetCard();
  };
  const wrongAnswer = () => {
    console.log("Wrong answer, Dummy!");
  };
  //   const [submission, setSubmission] = useState();

  const submitAnswer = (submission) => {
    if (submission === answer) {
      win();
    } else {
      wrongAnswer();
    }
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => {
          submitAnswer(answer);
        }}
      >
        <Text style={styles.text}>Answer</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => {
          resetCard();
        }}
      >
        <Text style={styles.text}>Close Quiz</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 5,
    margin: 5,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#1c1c1c",
    borderColor: "gray",
  },
  scrollAnswers: {
    flex: 1,
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginHorizontal: 30,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#1c1c1c",
  },
});
export default QuizCard;
