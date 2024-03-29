import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  Pressable,
  Dimensions,
} from 'react-native';
import { colors } from '../constants/colors';
import SocialContainer from '../components/SocialContainer';

const { width, height } = Dimensions.get('window');
const OnBoardingScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Chatterz</Text>
      <Text style={styles.subtitle}>Connect friends easily & quickly</Text>
      <Text style={styles.description}>
        Our chat app is a perfect way to stay connected with friends and family.
      </Text>
      <SocialContainer />
      <View
        style={{
          alignItems: 'center',
          paddingTop: 40,
        }}
      >
        <Text style={styles.text}>OR</Text>
      </View>
      <View style={{ paddingTop: 30 }}>
        <Pressable
          onPress={() => navigation.navigate('Signup')}
          style={styles.button}
        >
          <Text
            style={{
              fontFamily: 'Poppins-SemiBold',
              color: colors.green,
              fontSize: 18,
              alignSelf: 'center',
              paddingVertical: 8,
            }}
          >
            Sign up with email
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          paddingTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            color: colors.grey,
            fontSize: 15,
            fontFamily: 'Poppins-SemiBold',
          }}
        >
          Existing account?{' '}
          <Pressable onPress={() => navigation.navigate('Login')}>
            <Text style={{ color: colors.snow, fontSize: 15 }}> Log in</Text>
          </Pressable>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },

  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: colors.snow,
    alignSelf: 'center',
  },
  subtitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 75,
    color: colors.white,
    padding: 10,
    // shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  description: {
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    color: colors.grey,
    paddingTop: 10,
    paddingHorizontal: 5,
  },

  text: {
    color: colors.snow,
    fontSize: 20,
    alignItems: 'center',
    fontFamily: 'Poppins-SemiBold',
  },
  button: {
    backgroundColor: colors.white,
    borderRadius: 30,
    marginHorizontal: 30,
  },
});
