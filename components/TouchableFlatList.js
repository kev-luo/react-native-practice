import React from "react";
import { StyleSheet, Text, FlatList, TouchableOpacity } from "react-native";

export default function TouchableFlatList({ people, setPeople }) {
  const pressHandler = (id) => {
    setPeople((prevPeople) => {
      return prevPeople.filter((person) => {
        return person.id !== id;
      });
    });
  };

  return (
    <FlatList
      numColumns={2}
      keyExtractor={(person) => person.id}
      data={people}
      renderItem={(person) => (
        <TouchableOpacity onPress={() => pressHandler(person.item.id)}>
          <Text style={styles.item}>{person.item.name}</Text>
        </TouchableOpacity>
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
