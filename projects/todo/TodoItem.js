import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function TodoItem({ todo, pressHandler }) {

  return (
    <TouchableOpacity onPress={() => pressHandler(todo.key)}>
      <Text style={styles.item}>{todo.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginBottom: 16,
    marginHorizontal: 15,
    borderColor: "#bbb",
    borderWidth: 1,
    borderRadius: 10
  }
});
