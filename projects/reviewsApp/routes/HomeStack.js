import React from "react";
import { Image } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";
import Header from "../shared/Header";

const { Navigator, Screen } = createStackNavigator();

export const HomeStack = ({ navigation }) => (
  <Navigator
    initialRouteName="Home"
    // screenOptions={{
    //   headerStyle: { backgroundColor: "coral", height: 90 },
    //   headerTintColor: "blue",
    // }}
  >
    <Screen
      name="Home"
      component={Home}
      options={{
        headerTitle: () => <Header navigation={navigation} title="Game Zone" />,
        headerBackground: () => <Image source={require("../../../assets/game_bg.png")} style={{height: 60}} />
      }}
    />
    <Screen
      name="Reviews"
      component={ReviewDetails}
      options={{ title: "Review Details" }}
    />
  </Navigator>
);

export default HomeStack;

// export default function AppNavigator() {
//   return (
//     <NavigationContainer>
//       <HomeNavigator />
//     </NavigationContainer>
//   );
// }
