import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import TouchableFlatList from './components/TouchableFlatList';

export default function App() {
  const [people, setPeople] = useState([
    { name: "shaun", id: 1 },
    { name: "yoshi", id: 2 },
    { name: "karan", id: 3 },
    { name: "pankaj", id: 4 },
    { name: "sk", id: 5 },
    { name: "harry", id: 6 },
    { name: "logan", id: 7 },
  ]);

  return (
    <View style={styles.container}>
      <TouchableFlatList setPeople={setPeople} people={people} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  }
});
