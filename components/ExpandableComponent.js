import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
const rocks_glass = require("../assets/rocks_glass.png");
const collins_glass = require("../assets/collins_glass.png");
const shot_glass = require("../assets/shot_glass.png");
const martini_glass = require("../assets/martini2.png");

const ExpandableComponent = (props) => {
  const [layoutHeight, setlayoutHeight] = useState();
  const [activeBorder, setActiveBorder] = useState();
  const { item, active, setActive, index } = props;
  //   const [isExpanded, setIsExpanded] = useState(active);

  //   const glassIcon = () => (item.glass === "Rocks" ? martini_glass : null);

  let glassIcon = null;

  switch (item.glass) {
    case "Rocks":
      glassIcon = rocks_glass;
      console.log("glassIcon1:", glassIcon);
      break;
    case "Martini":
      glassIcon = martini_glass;
      console.log("glassIcon2:", glassIcon);
      break;
    case "Shot":
      glassIcon = shot_glass;
      console.log("glassIcon3:", glassIcon);
      break;
    case "Collins":
      glassIcon = collins_glass;
      console.log("glassIcon4:", glassIcon);
      break;
    case "Snifter":
      glassIcon = martini_glass;
      console.log("glassIcon5:", glassIcon);
      break;
    default:
      glassIcon = martini_glass;
      console.log("glassIcon6:", glassIcon);
      break;
  }

  //   console.log("PROPS: ", item);
  useEffect(() => {
    console.log("active: ", active);
    if (active != index) {
      setlayoutHeight(0);
      setActiveBorder(false);
      console.log("setLayoutHeight to null", active);
    } else {
      setlayoutHeight(null);
      setActiveBorder(true);
      console.log("setLayoutHeight to 0", active);
    }
  }, [active]);

  return (
    <View
      style={[
        styles.itemContainer,
        {
          borderColor: activeBorder ? "white" : null,
          minHeight: activeBorder ? 300 : null,
        },
      ]}
    >
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          active != index ? setActive(index) : setActive(null);
        }}
      >
        <Text style={[styles.itemText]}>{item.name}</Text>
      </TouchableOpacity>

      <View
        style={[
          {
            height: layoutHeight,
            overflow: "hidden",
            // backgroundColor: "orange",
          },
        ]}
      >
        <View
          style={{
            flexDirection: "row",
            display: "flex",
          }}
        >
          <View style={{ flex: 3, flexDirection: "column", height: "100%" }}>
            {item["ingredient1"] ? (
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 3 }}>
                  <Text style={styles.text}>{item["ingredient1"]["name"]}</Text>
                </View>
                <View style={{ flex: 2, alignItems: "flex-end" }}>
                  <Text style={styles.text}>
                    {item["ingredient1"]["amount"]}
                    {["Splash", "Fill", "Float"].includes(
                      item["ingredient1"]["amount"]
                    )
                      ? null
                      : ""}
                  </Text>
                </View>
              </View>
            ) : null}
            {item["ingredient2"] ? (
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 3 }}>
                  <Text style={styles.text}>{item["ingredient2"]["name"]}</Text>
                </View>
                <View
                  style={{
                    flex: 2,
                    alignItems: "flex-end",
                    // backgroundColor: "red",
                  }}
                >
                  <Text style={styles.text}>
                    {item["ingredient2"]["amount"]}
                    {["Splash", "Fill", "Float"].includes(
                      item["ingredient2"]["amount"]
                    )
                      ? null
                      : ""}
                  </Text>
                </View>
              </View>
            ) : null}
            {item["ingredient3"] ? (
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 3 }}>
                  <Text style={styles.text}>{item["ingredient3"]["name"]}</Text>
                </View>
                <View style={{ flex: 2, alignItems: "flex-end" }}>
                  <Text style={[styles.text]}>
                    {item["ingredient3"]["amount"]}
                  </Text>
                </View>
              </View>
            ) : null}
            {item["ingredient4"] ? (
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 3 }}>
                  <Text style={[styles.text]}>
                    {item["ingredient4"]["name"]}
                  </Text>
                </View>
                <View style={{ flex: 2, alignItems: "flex-end" }}>
                  <Text style={styles.text}>
                    {item["ingredient4"]["amount"]}
                    {["Splash", "Fill", "Float"].includes(
                      item["ingredient4"]["amount"]
                    )
                      ? null
                      : ""}
                  </Text>
                </View>
              </View>
            ) : null}
            {item["ingredient5"] ? (
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 3 }}>
                  <Text style={[styles.text]}>
                    {item["ingredient5"]["name"]}
                  </Text>
                </View>
                <View style={{ flex: 2, alignItems: "flex-end" }}>
                  <Text style={styles.text}>
                    {item["ingredient5"]["amount"]}
                    {["Splash", "Fill", "Float"].includes(
                      item["ingredient5"]["amount"]
                    )
                      ? null
                      : ""}
                  </Text>
                </View>
              </View>
            ) : null}
            {item["ingredient6"] ? (
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 3 }}>
                  <Text style={[styles.text]}>
                    {item["ingredient6"]["name"]}
                  </Text>
                </View>
                <View style={{ flex: 2, alignItems: "flex-end" }}>
                  <Text style={styles.text}>
                    {item["ingredient6"]["amount"]}
                    {["Splash", "Fill", "Float"].includes(
                      item["ingredient6"]["amount"]
                    )
                      ? null
                      : ""}
                  </Text>
                </View>
              </View>
            ) : null}

            <View style={{ flexDirection: "row" }}>
              <Text style={styles.text}>
                {item["note"] ? item["note"] : null}
              </Text>
            </View>
          </View>
          {/* Right Column */}
          <View
            style={{
              flex: 2,
              height: "100%",
              flexDirection: "column",
              //   alignContent: "space-around",
              justifyContent: "center",
            }}
          >
            {/* Icon areaa */}
            <View
              style={{
                flex: 1,
                maxHeight: 150,
              }}
            >
              <Image
                source={glassIcon}
                style={[
                  styles.image,
                  { flex: 1, width: "100%", height: "100%" },
                ]}
              />
              <View />
              <View style={{ flex: 1 }}>
                <View
                  style={{
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  <Text style={[styles.text, { alignSelf: "center" }]}>
                    {item["glass"]}
                  </Text>
                  {/* <Text> </Text>
                    <Text style={styles.text}>Glass</Text> */}
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.text}>
                    {["none", undefined].includes(item["garnish"])
                      ? "No"
                      : item["garnish"]}
                  </Text>
                  {/* <Text> </Text>
                  <Text style={styles.text}>Garnish</Text> */}
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
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
export default ExpandableComponent;
