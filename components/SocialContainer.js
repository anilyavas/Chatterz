import { View, StyleSheet, Pressable } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { colors } from '../constants/colors';

const SocialContainer = () => {
  return (
    <View style={styles.socialContainer}>
      <Pressable>
        <Ionicons name='logo-facebook' size={45} color={colors.snow} />
      </Pressable>
      <Pressable>
        <AntDesign name='google' size={45} color={colors.snow} />
      </Pressable>
      <Pressable>
        <AntDesign name='apple1' size={45} color={colors.snow} />
      </Pressable>
    </View>
  );
};

export default SocialContainer;

const styles = StyleSheet.create({
  socialContainer: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
    paddingTop: 30,
    alignItems: 'center',
  },
});
