import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";

const { Navigator, Screen } = createStackNavigator();

export default function HomeStack() {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: "coral", height: 60 },
        headerTintColor: "green",
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen
        name="Reviews"
        component={ReviewDetails}
        options={{ title: "Review Details" }}
      />
    </Navigator>
  );
}

// export default function AppNavigator() {
//   return (
//     <NavigationContainer>
//       <HomeNavigator />
//     </NavigationContainer>
//   );
// }
