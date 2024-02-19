import { View, Text, FlatList, Image } from 'react-native';
import dummyData from '../assets/data/dummyData';
const CallContainer = () => {
  return (
    <View>
      <FlatList data={dummyData} renderItem={({ item }) => <View></View>} />
    </View>
  );
};

export default CallContainer;
