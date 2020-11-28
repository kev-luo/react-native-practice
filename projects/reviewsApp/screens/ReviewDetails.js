import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native';

import { globalStyles } from '../styles/global';

export default function ReviewDetails({navigation}) {

  const handlePress = () => {
    // this "pops" a Screen off the stack and goes back one Screen
    navigation.goBack();
  }

  return (
    <View style={globalStyles.container}>
      <Text>Reviews</Text>
      <Button title="Pop off" onPress={handlePress} />
    </View>
  )
}
