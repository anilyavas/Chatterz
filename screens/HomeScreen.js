import { FlatList, SafeAreaView, StyleSheet, Image } from 'react-native';
import { colors } from '../constants/colors';
import HomeTopContainer from '../components/HomeTopContainer';
import StoryList from '../components/StoryList';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeTopContainer />
      <StoryList />
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
