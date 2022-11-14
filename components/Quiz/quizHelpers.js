import { useState } from "react";
import { useEffect } from "react";
import { Dimensions, Image, Text, View } from "react-native";
import Fireworks from "../../assets/Fireworks";

const questionMark = require("../../assets/questionmark.png");

export const celebrate = (setCelebrate) => {
  setCelebrate(true);
  setTimeout(() => {
    setCelebrate(false);
  }, 2000);
};

export const Celebrate = ({ celebrate, layoutHeight }) => {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  const [celebrateIsActive, setCelebrateIsActive] = useState(false);

  useEffect(() => {
    setCelebrateIsActive(celebrate);
  }, [celebrate]);

  return celebrateIsActive ? (
    <Fireworks
      speed={3}
      density={9}
      colors={["#ff0", "#ff3", "#cc0", "#ff4500", "#ff6347"]}
      iterations={30}
      height={layoutHeight}
      width={width}
      zIndex={1}
      circular={false}
    />
  ) : null;
};

export default QuizQuestion = ({ celebrate, layoutHeight }) => {
  console.log("celebrate: ", celebrate);
  return celebrate === true ? (
    <View style={{}}>{/* <Celebrate layoutHeight={layoutHeight} /> */}</View>
  ) : (
    <Image
      source={questionMark}
      resizeMode="contain"
      style={{
        alignSelf: "center",
        width: 100,
        height: 50,
        position: "absolute",
      }}
    />
  );
};
