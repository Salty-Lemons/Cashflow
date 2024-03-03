import React from "react";
import { View } from "./Themed";
import { Text } from "react-native";

export default function TestSurvey() {
  return (
    <View
      style={{
        width: "90%",
        height: 200,
        backgroundColor: "#efdd93",
        margin: 10,
        borderRadius: "25%",
        shadowOffset: { width: 1, height: 2 },
        shadowColor: "black",
        shadowOpacity: 0.3,
        elevation: 2,
      }}
    >
      <Text>Test Survey</Text>
    </View>
  );
}
