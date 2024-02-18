import { View, Text, StyleSheet, TextInput, SafeAreaView } from 'react-native';
import { colors } from '../constants/colors';
import SocialContainer from '../components/SocialContainer';

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.title}>Login to Chatterz</Text>
        <Text style={styles.subtitle}>
          Welcome back! Sign in using your social account or email to continue
          us
        </Text>
      </View>
      <SocialContainer />
    </SafeAreaView>
  );
};

export default Login;

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
    fontSize: 25,
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
