import React from "react";
import { FlatList } from "react-native";

import TodoItem from './TodoItem';

export default function TodoList({ todos, pressHandler }) {
  return (
    <FlatList
      data={todos}
      renderItem={({ item }) => <TodoItem pressHandler={pressHandler} todo={item} />}
    />
  );
}