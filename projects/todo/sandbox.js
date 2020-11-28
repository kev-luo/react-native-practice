import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function sandbox() {
  return (
    <View style={styles.container}>
      <Text style={styles.box1}>Box One</Text>
      <Text style={styles.box2}>Box Two</Text>
      <Text style={styles.box3}>Box Three</Text>
      <Text style={styles.box4}>Box Four</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flexGrow: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    paddingTop: 100,
    backgroundColor: "coral",
  },
  box1: {
    flexGrow: 1,
    backgroundColor: "violet",
    padding: 10,
  },
  box2: {
    flexGrow: 1,
    backgroundColor: "red",
    padding: 20,
  },
  box3: {
    flexGrow: 1,
    backgroundColor: "yellow",
    padding: 10,
  },
  box4: {
    flexGrow: 1,
    backgroundColor: "green",
    padding: 40,
  }
})