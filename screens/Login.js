import { View, Text, StyleSheet, TextInput, SafeAreaView } from 'react-native';
import { colors } from '../constants/colors';
import SocialContainer from '../components/SocialContainer';
import Button from '../components/Button';

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.title}>Login to Chatterz</Text>
        <Text style={styles.subtitle}>
          Welcome back! Sign in using your social account or email to continue
          us
        </Text>
        <SocialContainer />
      </View>
      <Text style={styles.or}>OR</Text>
      <View style={styles.loginContainer}>
        <Text style={styles.email}>Email</Text>
        <TextInput
          style={styles.textinput}
          placeholder='email@email.com'
          placeholderTextColor={colors.snow}
        />
        <Text style={styles.email}>Password</Text>
        <TextInput
          style={styles.textinput}
          placeholder='*********'
          placeholderTextColor={colors.snow}
        />
      </View>
      <Button buttonText={'Login'} />
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
  loginContainer: {
    paddingTop: 50,
    justifyContent: 'center',
    margin: 10,
  },
  email: {
    color: colors.green,
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    padding: 15,
  },
  textinput: {
    borderBottomColor: colors.grey,
    borderBottomWidth: 0.5,
    paddingLeft: 15,
    paddingVertical: 5,
    fontFamily: 'Poppins-Regular',
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
  or: {
    color: colors.snow,
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    paddingTop: 50,
  },
});
