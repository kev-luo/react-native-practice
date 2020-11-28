import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="Home" component={Home}/>
    <Screen name="Reviews" component={ReviewDetails}/>
  </Navigator>
)

export const HomeStack = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
)