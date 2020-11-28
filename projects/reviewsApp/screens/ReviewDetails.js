import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import Card from "../shared/Card";
import { globalStyles, images } from "../styles/global";

export default function ReviewDetails({ route: { params }, navigation }) {
  const { body, key, rating, title } = params;
  const handlePress = () => {
    // this "pops" a Screen off the stack and goes back one Screen
    navigation.goBack();
  };

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{title}</Text>
        <Text>{body}</Text>
        <View style={styles.rating}>
          <Text>Rating: </Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});
