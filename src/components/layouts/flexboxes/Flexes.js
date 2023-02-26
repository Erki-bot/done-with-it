import React from "react";
import { Platform, StatusBar, View } from "react-native";
export const Flexes = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "dodgerblue",
        }}
      />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "gold",
        }}
      />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "tomato",
        }}
      />
    </View>
  );
};
