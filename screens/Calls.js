import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';
import CallContainer from '../components/CallContainer';

const Calls = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent</Text>
      <CallContainer />
    </View>
  );
};

export default Calls;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    color: colors.snow,
    fontSize: 20,
    padding: 15,
  },
});
