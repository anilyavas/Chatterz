import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { colors } from '../constants/colors';
import { FontAwesome } from '@expo/vector-icons';
import { dummyData } from '../assets/data/dummyData';

const HomeTopContainer = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <FontAwesome name='search' size={40} color={colors.grey} />
      </Pressable>
      <Text style={styles.title}>Home</Text>
      <Image style={styles.image} source={{ uri: dummyData[0].imageLink }} />
    </View>
  );
};

export default HomeTopContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 25,
    color: colors.snow,
    opacity: 0.9,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 30,
  },
});
