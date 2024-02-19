import { Dimensions, SafeAreaView, StyleSheet, View } from 'react-native';
import { colors } from '../constants/colors';
import HomeTopContainer from '../components/HomeTopContainer';
import StoryList from '../components/StoryList';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Messages from './Messages';
import Calls from './Calls';
import BottomSheet from '@gorhom/bottom-sheet';
import { useMemo } from 'react';

const Tab = createMaterialBottomTabNavigator();
const { width, height } = Dimensions.get('window');
const HomeScreen = () => {
  const snapPoints = useMemo(() => ['70%', '92%'], []);
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
          barStyle={{ backgroundColor: colors.black }}
          activeColor={colors.snow}
          inactiveColor={colors.grey}
        >
          <Tab.Screen
            name='Messages'
            component={Messages}
            options={{ tabBarColor: colors.grey }}
          />
          <Tab.Screen name='Calls' component={Calls} />
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
