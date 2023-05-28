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
      }}
    >
      <Text>Test Survey</Text>
    </View>
  );
}
