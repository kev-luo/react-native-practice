import React from "react";
import { Image } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";

import About from "../screens/About";
import Header from "../shared/Header";

const { Navigator, Screen } = createStackNavigator();

export const AboutStack = ({ navigation }) => (
  <Navigator
    // screenOptions={{
    //   headerStyle: { backgroundColor: "coral", height: 90 },
    //   headerTintColor: "green",
    // }}
  >
    <Screen
      name="About"
      component={About}
      options={{
        headerTitle: () => <Header navigation={navigation} title="About" />,
        headerBackground: () => <Image source={require("../../../assets/game_bg.png")} style={{height: 60}} />
      }}
    />
  </Navigator>
);

export default AboutStack;
