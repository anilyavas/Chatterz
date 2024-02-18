import { Text, Pressable, StyleSheet, Dimensions, View } from 'react-native';
import { colors } from '../constants/colors';

const { width, height } = Dimensions.get('window');
const Button = ({ buttonText, secondButtonText }) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </Pressable>
      <Pressable>
        <Text style={styles.forgot}>{secondButtonText}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 60,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: colors.green,
    width: width * 0.8,
    borderRadius: 30,
    marginBottom: 10,
  },
  buttonText: {
    fontFamily: 'Poppins-SemiBold',
    color: colors.snow,
    fontSize: 15,
    margin: 10,
    textAlign: 'center',
  },
  forgot: {
    fontFamily: 'Poppins-SemiBold',
    color: colors.snow,
    textAlign: 'center',
  },
});
