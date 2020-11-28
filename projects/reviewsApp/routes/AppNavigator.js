import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";

// Navigator and Screen are both components used for configuring the navigator
// The Navigator should contain the Screen components as children to define the config for routes
const { Navigator, Screen } = createStackNavigator();

function HomeNavigator() {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} />
      <Screen name="Reviews" component={ReviewDetails} />
    </Navigator>
  );
}

export default function AppNavigator() {
  // NavigationContainer is a component that manages our nagivation tree and contains the navigation state
  // this component must wrap ALL navigators structure
  // we'd usually render this at the root of our app - usually the component exported from App.js
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
}
