import React from 'react'
import { Button, View, Text } from 'react-native';

import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {
  // all Screen components within our Navigator are passed a prop called navigation. we can use navigation.navigate() to go to a defined Screen in our Navigator. 
  // the argument we pass into navigation.navigate() must match the name property of the Screen component
  const pressHandler = () => {
    navigation.navigate("Reviews");
  }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
      <Button title="Go to review Details" onPress={pressHandler}/>
    </View>
  )
}