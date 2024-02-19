import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { dummyData } from '../assets/data/dummyData';
import { colors } from '../constants/colors';
import { FlatList } from 'react-native-gesture-handler';

const MessageContainer = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={dummyData}
        renderItem={({ item }) => (
          <View style={styles.messageContainer}>
            <Image source={{ uri: item.imageLink }} style={styles.image} />
            <View style={styles.secondContainer}>
              <Text style={styles.name}>
                {item.name} {item.surname}
              </Text>
              <Text style={styles.lastMessage}>How are you?</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default MessageContainer;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  messageContainer: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  secondContainer: {
    paddingLeft: 15,
  },
  timeContainer: {},
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    margin: 15,
  },
  name: {
    fontFamily: 'Poppins-SemiBold',
    color: colors.snow,
    marginTop: 15,
    paddingBottom: 8,
  },
  lastMessage: {
    color: colors.snow,
    fontFamily: 'Poppins-Regular',
  },
  time: {
    color: colors.grey,
    marginTop: 15,
    alignSelf: 'flex-end',
  },
});
