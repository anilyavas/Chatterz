import { FlatList, Image, StyleSheet } from 'react-native';
import { dummyData } from '../assets/data/dummyData';
import { colors } from '../constants/colors';

const StoryList = () => {
  return (
    <FlatList
      contentContainerStyle={styles.list}
      data={dummyData}
      renderItem={({ item }) => (
        <Image source={{ uri: item.imageLink }} style={styles.image} />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default StoryList;

const styles = StyleSheet.create({
  list: {
    gap: 20,
    flex: 1,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
});
