import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import AboutStack from "./AboutStack";
import HomeStack from "./HomeStack";

const { Navigator, Screen } = createDrawerNavigator();

export const RootDrawerNavigator = () => (
  <Navigator initialRouteName="Home">
    <Screen name="Home" component={HomeStack} />
    <Screen name="About" component={AboutStack} />
  </Navigator>
);

export const AppNavigator = () => (
  // NavigationContainer is a component that manages our nagivation tree and contains the navigation state
  // this component must wrap ALL navigators structure
  // we'd usually render this at the root of our app - usually the component exported from App.js
  <NavigationContainer>
    <RootDrawerNavigator />
  </NavigationContainer>
);

export default AppNavigator;
