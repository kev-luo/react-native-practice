import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

import TodoHeader from './projects/todo/TodoHeader'
import TodoList from './projects/todo/TodoList';

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);

  return (
    <View style={styles.container}>
      <TodoHeader />
      <View style={styles.content}>
        {/* todo form */}
        <View style={styles.list}>
          <TodoList todos={todos}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }
});
