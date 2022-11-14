import { useEffect } from "react";
import { useState } from "react";
import { View, Button, StyleSheet, Pressable, Text } from "react-native";
import ScrollPicker from "react-native-wheel-scrollview-picker";

import { drinkList } from "../../liquerList";
import { celebrate } from "./quizHelpers";

const QuizCard = ({
  item,
  answer,
  resetCard,
  category,
  setQuizCard,
  setCelebrate,
}) => {
  const [selected, setSelected] = useState(1);
  const [scrollList, setScrollList] = useState([]);
  const liquorList = drinkList.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });

  useEffect(() => {
    switch (category) {
      case "ingredient":
        console.log("ingredient quizCard");
        setScrollList(liquorList);
        break;
      default:
        setScrollList(["Another List"]);
        break;
    }
  }, [category]);

  const win = () => {
    console.log("You Won!");
    celebrate(setCelebrate);
    setTimeout(() => {
      resetCard();
    }, 2000);
  };

  const wrongAnswer = () => {
    console.log("Wrong answer, Dummy!");
  };

  //   const [submission, setSubmission] = useState();
  const submitAnswer = (index) => {
    console.log("submitAnswer: ", scrollList[index]);
    if (scrollList[index] === answer) {
      win();
    } else {
      wrongAnswer();
    }
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 25,
          color: "white",
          alignSelf: "center",
          marginVertical: 5,
        }}
      >
        What's the missing ingredient?
      </Text>
      {/* <View
        style={{ flexDirection: "row", paddingVertical: 10, marginBottom: 10 }}
      >
        <Pressable
          style={styles.button}
          onPress={() => {
            resetCard();
          }}
        >
          <Text style={styles.text}>Close Quiz</Text>
        </Pressable>
      </View> */}
      <ScrollPicker
        dataSource={scrollList}
        selectedIndex={2}
        renderItem={(data, index) => {
          return (
            <>
              <View style={{ flexDirection: "row" }}>
                <Pressable
                  //   style={styles.button}
                  onPress={() => {
                    submitAnswer(index);
                  }}
                >
                  <Text style={{ color: "white", fontSize: 20 }}>{data}</Text>
                </Pressable>
              </View>
            </>
          );
        }}
        onValueChange={(data, selectedIndex) => {
          //   setSelected(selectedIndex);
        }}
        wrapperHeight={160}
        wrapperWidth={50}
        wrapperColor="#1c1c1c"
        itemHeight={35}
        highlightColor="transparent"
        highlightBorderWidth={1}
        // itemTextStyle={{ color: "#fff", fontSize: 20 }}
        // itemColor={"#B4B4B4"}
        // activeItemColor={"#fff"}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 0,
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
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    // paddingVertical: 12,
    // paddingHorizontal: 20,
    // marginHorizontal: 20,
    borderRadius: 40,
    elevation: 3,
    backgroundColor: "green",
  },
});
export default QuizCard;
