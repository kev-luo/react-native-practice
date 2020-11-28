import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ todo, pressHandler }) {

  return (
    <TouchableOpacity onPress={() => pressHandler(todo.key)}>
    <View style={styles.item}>
      <MaterialIcons name="delete" size={18} color="#333" />
      <Text style={styles.itemText}>{todo.text}</Text>
    </View>
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
    borderRadius: 10,
    flexDirection: "row"
  },
  itemText: {
    marginLeft: 10
  }
});
