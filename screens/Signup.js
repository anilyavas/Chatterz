import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { colors } from '../constants/colors';
import SignupForm from '../components/SignupForm';
import Button from '../components/Button';

const Signup = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.title}>Sign up with email</Text>
        <Text style={styles.subtitle}>
          Get chatting with friends and family today by signing up for our chat
          app!
        </Text>
      </View>
      <SignupForm text={'Name'} />
      <SignupForm text={'Your email'} />
      <SignupForm text={'Password'} />
      <SignupForm text={'Confirm Password'} />
      <Button buttonText={'Sign up'} />
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  welcomeContainer: {
    paddingHorizontal: 40,
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    color: colors.snow,
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 70,
  },
  subtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: colors.grey,
    textAlign: 'center',
    paddingTop: 25,
  },
});
