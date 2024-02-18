import { View, Text, TextInput, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';
import Button from './Button';

const SignupForm = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.email}>{text}</Text>
      <TextInput style={styles.textInput} autoCapitalize='none' />
    </View>
  );
};

export default SignupForm;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    padding: 10,
  },
  email: {
    color: colors.green,
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    paddingHorizontal: 15,
  },
  textInput: {
    borderBottomColor: colors.grey,
    borderBottomWidth: 0.5,
    paddingLeft: 15,
    paddingVertical: 5,
    fontFamily: 'Poppins-Regular',
    color: colors.snow,
  },
});
