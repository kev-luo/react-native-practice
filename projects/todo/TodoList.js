import React from "react";
import { StyleSheet, FlatList, Text } from "react-native";

export default function TodoList({ todos }) {
  return (
    <FlatList
      data={todos}
      renderItem={({ item }) => <Text style={styles.item}>{item.text}</Text>}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    
  }
})