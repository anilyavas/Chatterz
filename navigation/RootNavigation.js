import { createStackNavigator } from '@react-navigation/stack';
import OnBoardingScreen from '../screens/OnBoardingScreen';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName='OnBoarding'
      >
        <Stack.Screen name='OnBoarding' component={OnBoardingScreen} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='ChatScreen' component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
