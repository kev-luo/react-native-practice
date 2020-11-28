import React, { useState } from "react";
import { FlatList, View, Text, TouchableOpacity } from "react-native";

import Card from "../shared/Card";
import { globalStyles } from "../styles/global";
import { data } from "../data";

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState(data);

  // all Screen components within our Navigator are passed a prop called navigation. we can use navigation.navigate() to go to a defined Screen in our Navigator.
  // the first argument we pass into navigation.navigate() must match the name property of the Screen component
  // the second argument we pass into navigation.navigate() are additional information we want to pass to the navigated-to component

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Reviews", item)}
          >
            <Card>
              <Text style={globalStyles.paragraph}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
