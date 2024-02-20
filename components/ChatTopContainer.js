import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../constants/colors';
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons';
import { dummyData } from '../assets/data/dummyData';

const ChatTopContainer = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.topContainer}>
      <Pressable style={styles.arrow} onPress={() => navigation.goBack()}>
        <Ionicons name='arrow-back' size={30} color={colors.snow} />
      </Pressable>
      <Image source={{ uri: dummyData[1].imageLink }} style={styles.image} />
      <View style={styles.nameContainer}>
        <Text style={styles.name}>
          {dummyData[1].name} {dummyData[1].surname}
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text
            style={{
              fontSize: 14,
              color: colors.green,
              textAlign: 'center',
              paddingRight: 5,
            }}
          >
            O
          </Text>
          <Text style={styles.status}>Active Now</Text>
        </View>
      </View>
      <View style={{ flex: 1 }} />
      <View style={styles.callContainer}>
        <Pressable>
          <Feather name='phone-call' color={colors.snow} size={30} />
        </Pressable>
        <Pressable>
          <AntDesign name='videocamera' size={30} color={colors.snow} />
        </Pressable>
      </View>
    </View>
  );
};

export default ChatTopContainer;

const styles = StyleSheet.create({
  topContainer: {
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
    flexDirection: 'row',
    padding: 10,
  },
  nameContainer: {
    paddingLeft: 15,
    paddingTop: 5,
  },
  callContainer: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
  arrow: {
    padding: 10,
    justifyContent: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  name: {
    fontFamily: 'Poppins-SemiBold',
    color: colors.snow,
    fontSize: 16,
  },
  status: {
    fontFamily: 'Poppins-Regular',
    color: colors.grey,
    fontSize: 14,
  },
});
