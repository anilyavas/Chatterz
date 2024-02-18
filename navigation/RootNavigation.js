import { createStackNavigator } from '@react-navigation/stack';
import OnBoardingScreen from '../screens/OnBoardingScreen';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/Login';
import Signup from '../screens/Signup';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName='Login'
      >
        <Stack.Screen name='OnBoarding' component={OnBoardingScreen} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Signup' component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
