import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../config/colors";

export default function Circle({
  raduis = 100,
  color = "#ccc",
  elevation = 0,
}) {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: color,
          width: raduis,
          height: raduis,
          borderRadius: raduis / 2,
          //   elevation: elevation,
          borderStartWidth : raduis/2
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  //   circle: {
  //     backgroundColor: colors.black,
  //     width: raduis,
  //     height: raduis,
  //     borderRadius: raduis / 2,
  //   },
});
