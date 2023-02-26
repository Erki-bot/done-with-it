import React from "react";
import { SafeAreaView, Button, Alert } from "react-native";

export const Allert = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      {/* <Text numberOfLines={1} onPress={handlePress}>
        Ceci est un texte vraiment long. Ajoutons assez de lignes pour voir ce
        qui va se passer
      </Text>
      <Image
        // blurRadius={12}
        // fadeDuration={2000}
        source={{
          width: 300, 
          height: 200,
          uri: img1Url[1],
        }}
      /> */}
      <Button
        title="Click me"
        onPress={() =>
          Alert.alert("Avertissement", "Voullez-vous vraiment supprimer?", [
            { text: "Oui" },
            { text: "Non" },
          ])
        }
      />
    </SafeAreaView>
  );
};
