import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
} from "react-native";
import ViewImageScreen from "./src/components/exercices/layouts/ViewImageScreen";
import { WelcomeScreen } from "./src/components/exercices/layouts/WelcomeScreen";
import { Flexes } from "./src/components/layouts/flexboxes/Flexes";
import Circle from "./src/components/stylings/Circle";
import colors from "./src/config/colors";

export default function App() {
  let img1Url = [
    "https://picsum.photos/200/300",
    "https://cdn.pixabay.com/photo/2023/01/23/09/26/cat-7738210_960_720.jpg",
  ];
  const handlePress = () => {
    console.log("Text pressed");
  };
  console.log("App started");
  return <Circle raduis={300} color= {colors.secondary} elevation = {50}/>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
