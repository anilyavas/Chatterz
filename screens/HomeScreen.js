import {
  View,
  Text,
  Pressable,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { colors } from '../constants/colors';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>HomeScreen</Text>
      </View>
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
