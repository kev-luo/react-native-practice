import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";

export default function ScrollViewStyled({people}) {
  return (
    <ScrollView>
      {people.map((person) => (
        <Text key={person.key} style={styles.item}>{person.name}</Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
  },
});
