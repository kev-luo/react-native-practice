import React from "react";
import { StyleSheet, TextInput } from "react-native";

export default function TextInputStyled({ name, setUser, user }) {
  return (
    <TextInput
      style={styles.input}
      placeholder={name==="name" ? "name here..." : "age here..."}
      keyboardType={name==="name" ? "default" : "number-pad"}
      onChangeText={(val) => setUser({...user, [name]: val})}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
});
