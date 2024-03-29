import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';
import { dummyData } from '../assets/data/dummyData';
import { colors } from '../constants/colors';
import { Feather, AntDesign } from '@expo/vector-icons';
const CallContainer = () => {
  return (
    <View>
      <FlatList
        data={dummyData}
        renderItem={({ item }) => (
          <View>
            <View style={styles.container}>
              <Image source={{ uri: item.imageLink }} style={styles.image} />
              <View>
                <Text style={styles.name}>
                  {item.name} {item.surname}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Feather
                    name='phone-call'
                    color={colors.green}
                    size={20}
                    style={{ paddingLeft: 10 }}
                  />
                  <Text style={{ color: colors.snow }}>Today 9.30 AM</Text>
                </View>
              </View>
              <View style={{ flex: 1 }} />
              <View
                style={{
                  flexDirection: 'row',
                  gap: 30,
                  paddingRight: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Pressable>
                  <Feather name='phone-call' color={colors.grey} size={30} />
                </Pressable>
                <Pressable>
                  <AntDesign name='videocamera' size={30} color={colors.grey} />
                </Pressable>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default CallContainer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    margin: 10,
  },
  name: {
    fontFamily: 'Poppins-SemiBold',
    color: colors.snow,
    padding: 10,
  },
});
