import { FlatList, Image, StyleSheet, View, Text } from 'react-native';
import { dummyData } from '../assets/data/dummyData';
import { colors } from '../constants/colors';

const StoryList = () => {
  return (
    <FlatList
      contentContainerStyle={styles.list}
      data={dummyData}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <Image source={{ uri: item.imageLink }} style={styles.image} />
          <Text style={styles.name}>{item.name}</Text>
        </View>
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
    flexGrow: 1,
    paddingHorizontal: 10,
    paddingTop: 70,
  },
  container: {
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
