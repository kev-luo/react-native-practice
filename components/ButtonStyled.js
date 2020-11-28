import React from "react";
import { StyleSheet, View, Button } from "react-native";

export default function ButtonStyled({ name }) {
  return (
    <View style={styles.buttonContainer}>
      <Button title={name} />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 20,
  },
});
