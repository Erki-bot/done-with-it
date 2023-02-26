import { useImageDimensions } from "@react-native-community/hooks";
import React from "react";
import {
  View,
  Image,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Text,
} from "react-native";
export const WelcomeScreen = () => {
  const source = require("../../../../assets/logo-red.png");
  //   const { dimensions, loading, error } = useImageDimensions(source);
  //   console.log(dimensions);

  return (
    <ImageBackground
      style={styles.container}
      source={require("../../../../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={source} />
        <Text style={styles.description}>Sell what you don't need</Text>
      </View>
      <View style={styles.loginButton} />
      <View style={styles.registerButton} />
    </ImageBackground>
  );
};
const { width } = Dimensions.get("screen");
let logoSize = width / 5;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    backgroundColor: "dodgerblue",
    width: "100%",
    height: 70,
  },
  registerButton: {
    backgroundColor: "tomato",
    width: "100%",
    height: 70,
  },
  logo: {
    width: logoSize,
    height: logoSize,
  },
  logoContainer: {
    flex: 1,
    top: 70,
    position: "absolute",
    alignItems: "center",
  },
  description: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
