import React from "react";
import { View } from "./Themed";
import { Text } from "react-native";

export default function TestSurvey() {
  return (
    <View
      style={{
        width: "85%",
        height: 180,
        backgroundColor: "#1bec0d",
        opacity: 0.7,
        margin: 10,
        borderRadius: '25%',
        shadowOffset: { width: 1, height: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.3,
        elevation: 2,
      }}
    >
      <Text style={{ margin: 25 }}>Test Survey</Text>
    </View>
  );
}
