import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ navigation, title }) {
  const handlePress = () => {
    navigation.openDrawer();
  };
  return (
    <ImageBackground source={require("../../../assets/game_bg.png")} style={styles.header}>
      <MaterialIcons
        name="menu"
        size={28}
        style={styles.icon}
        onPress={handlePress}
      />
      <View style={styles.headerTitle}>
        <Image style={styles.image} source={require("../../../assets/heart_logo.png")} />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
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
  icon: {
    position: "absolute",
    left: 16,
  },
  image: {
    width: 26,
    height: 26,
    marginHorizontal: 10,
  },
  headerTitle: {
    flexDirection: "row",
  }
});
