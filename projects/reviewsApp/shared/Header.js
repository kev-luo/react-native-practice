import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcon } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.header}>
      {/* icon for menu */}
      <View>
        <Text style={styles.headerText}>Hello</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
  },
});
