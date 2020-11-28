import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

import { globalStyles } from "../styles/global";

export default function ReviewDetails({ route, navigation }) {
  console.log(route);
  const handlePress = () => {
    // this "pops" a Screen off the stack and goes back one Screen
    navigation.goBack();
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Reviews</Text>
      
    </View>
  );
}
