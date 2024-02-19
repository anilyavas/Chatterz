import { View, Text } from 'react-native';
import React from 'react';
import { colors } from '../constants/colors';
import MessageContainer from '../components/MessageContainer';

const Messages = () => {
  return (
    <View style={{ backgroundColor: colors.black, flex: 1 }}>
      <MessageContainer />
    </View>
  );
};

export default Messages;
