import React, { useState } from "react";
import { StyleSheet, TextInput, Button, View, Alert } from "react-native";

export default function TodoForm({setTodos}) {
  const [todo, setTodo] = useState("");

  const changeHandler = (val) => {
    setTodo(val);
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
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="New todo..."
        onChangeText={(val) => changeHandler(val)}
      />
      <Button onPress={() => handleSubmit(todo)} title="add todo" color="coral" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderColor: "#777",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
