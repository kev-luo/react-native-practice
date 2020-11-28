import React from "react";
import { StyleSheet, FlatList, Text } from "react-native";

import TodoItem from './TodoItem';

export default function TodoList({ todos }) {
  return (
    <FlatList
      data={todos}
      renderItem={({ item }) => <TodoItem todo={item.text} />}
    />
  );
}