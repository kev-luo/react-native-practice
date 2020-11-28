import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import About from "../screens/About";

const { Navigator, Screen } = createStackNavigator();

export const AboutStack = () => (
  <Navigator>
    <Screen name="About" component={About} />
  </Navigator>
);

export default AboutStack;
