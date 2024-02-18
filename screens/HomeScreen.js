import { SafeAreaView, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';
import HomeTopContainer from '../components/HomeTopContainer';
import StoryList from '../components/StoryList';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeTopContainer />
      <StoryList />
      {/* BottomSheet will next */}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    flex: 1,
  },
  list: {
    gap: 20,
    paddingHorizontal: 10,
    flexGrow: 1,
  },
  listContainer: {
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  name: {
    color: colors.snow,
    paddingTop: 5,
  },
});
