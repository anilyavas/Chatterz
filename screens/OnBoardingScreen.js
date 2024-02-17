import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';

const OnBoardingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>OnBoardingScreen</Text>
    </View>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 30,
  },
});
