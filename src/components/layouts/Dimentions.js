import { useDeviceOrientation } from "@react-native-community/hooks";
import { StatusBar, Dimensions, SafeAreaView, View } from "react-native";

export const Dimention = () => {
  const landscape = useDeviceOrientation() === "landscape";
  console.log(useDeviceOrientation());
  return (
    <SafeAreaView
      style={{
        paddingTop: StatusBar.currentHeight,
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "100%",
          height: landscape ? "100%" : "50%",
        }}
      ></View>
    </SafeAreaView>
  );
};
