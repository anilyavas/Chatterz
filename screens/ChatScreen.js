import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';
import { useNavigation } from '@react-navigation/native';
import ChatTopContainer from '../components/ChatTopContainer';
const ChatScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ChatTopContainer />
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
});
