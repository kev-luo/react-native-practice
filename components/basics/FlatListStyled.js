import React from "react";
import { StyleSheet, Text, FlatList } from "react-native";

export default function FlatListStyled({ people }) {
  return (
    <FlatList
      numColumns={2}
      keyExtractor={(person) => person.id}
      data={people}
      renderItem={(person) => (
        <Text style={styles.item}>{person.item.name}</Text>
      )}
    />
  );
}

// flatlist always loooks for key property

const styles = StyleSheet.create({
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
    marginHorizontal: 10,
  },
});
