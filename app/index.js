import { Image, View, Text } from 'react-native';

export default function Screen () {
  return (  
    <View>
      <Text>Test Screen</Text>
      <Image source={require('../assets/logo.png')} />
    </View>
  );
};