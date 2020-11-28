import React, { useState } from "react";
import { StyleSheet, View, Alert } from "react-native";

import TodoHeader from "./projects/todo/TodoHeader";
import TodoForm from "./projects/todo/TodoForm";
import TodoList from "./projects/todo/TodoList";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key !== key);
    });
  };

  const handleSubmit = (todo) => {
    if (todo.length > 3) {
      setTodos((prevTodos) => {
        return [{ text: todo, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert("Oops!", "Todos must be more than 3 characters long", [
        {
          text: "Understood",
          onPress: () => console.log("alert close"),
        },
        {
          text: "No",
          onPress: () => console.log("NO"),
        }
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <TodoHeader />
      <View style={styles.content}>
        <TodoForm handleSubmit={handleSubmit} />
        <View style={styles.list}>
          <TodoList pressHandler={pressHandler} todos={todos} />
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
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
