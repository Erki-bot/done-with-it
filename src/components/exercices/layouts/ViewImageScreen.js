import React from "react";
import { Image, StatusBar, View, StyleSheet, Dimensions } from "react-native";

import colors from "../../../config/colors";
export default function ViewImageScreen() {
  const assets = "../../../../assets/";
  return (
    <View style={styles.container}>
      <View style={styles.close} />
      <View style={styles.delete} />
      <Image
        style={styles.image}
        source={require(assets + "chair.jpg")}
        resizeMode={"contain"}
      />
    </View>
  );
}
const { width, height } = Dimensions.get("screen");
const buttonSize = width / 10;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  close: {
    width: buttonSize,
    backgroundColor: colors.primary,
    height: buttonSize,
    position: "absolute",
    top: 40,
    left: 30,
  },
  delete: {
    width: buttonSize,
    backgroundColor: colors.secondary,
    height: buttonSize,
    position: "absolute",
    top: 40,
    right: 30,
  },
});
