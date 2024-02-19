import { Dimensions, SafeAreaView, StyleSheet, View } from 'react-native';
import { colors } from '../constants/colors';
import HomeTopContainer from '../components/HomeTopContainer';
import StoryList from '../components/StoryList';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Messages from './Messages';
import Calls from './Calls';
import BottomSheet from '@gorhom/bottom-sheet';
import { useMemo } from 'react';
import { AntDesign, Feather } from '@expo/vector-icons';
import { useTheme } from 'react-native-paper';

const Tab = createMaterialBottomTabNavigator();
const HomeScreen = () => {
  const theme = useTheme();
  theme.colors.secondaryContainer = 'transparent';
  const snapPoints = useMemo(() => ['70%'], []);
  return (
    <SafeAreaView style={styles.container}>
      <HomeTopContainer />
      <StoryList />
      {/* BottomSheet will next */}
      <BottomSheet
        backgroundStyle={{ backgroundColor: colors.grey }}
        snapPoints={snapPoints}
      >
        <Tab.Navigator
          initialRouteName='Messages'
          barStyle={{ backgroundColor: colors.black }}
          activeColor={colors.snow}
        >
          <Tab.Screen
            name='Messages'
            component={Messages}
            options={{
              tabBarIcon: () => (
                <AntDesign name='message1' size={30} color={colors.grey} />
              ),
            }}
          />
          <Tab.Screen
            name='Calls'
            component={Calls}
            options={{
              tabBarIcon: () => (
                <Feather name='phone-call' size={30} color={colors.grey} />
              ),
            }}
          />
        </Tab.Navigator>
      </BottomSheet>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    flex: 1,
  },
});
