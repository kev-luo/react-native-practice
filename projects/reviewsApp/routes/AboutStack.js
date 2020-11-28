import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import About from "../screens/About";

const { Navigator, Screen } = createStackNavigator();

export default function AboutStack() {
  return (
    <Navigator>
      <Screen name="About" component={About} />
    </Navigator>
  );
}
