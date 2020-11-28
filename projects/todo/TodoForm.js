import React, { useState } from "react";
import { StyleSheet, TextInput, Button, View } from "react-native";

export default function TodoForm({handleSubmit}) {
  const [todo, setTodo] = useState("");

  const changeHandler = (val) => {
    setTodo(val);
  };

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
