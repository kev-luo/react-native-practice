import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function TodoItem({ todo }) {
  return (
    <TouchableOpacity>
      <Text style={styles.item}>{todo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginBottom: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderRadius: 10
  }
});
