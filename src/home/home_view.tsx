/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {View, Text, StatusBar, Pressable} from 'react-native';
import {homeStyle} from './home.style';

const HomeView = () => {
  return (
    <View style={homeStyle.main}>
      <AppBar />
      <Text>Dashboard</Text>
      <Pressable onPress={() => {}}>
        <View
          style={{
            backgroundColor: 'red',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 16,
            borderRadius: 6,
            borderColor: '#fff',
            borderWidth: 1,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#fff',
              fontSize: 20,
            }}>
            Click
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default HomeView;

const AppBar = () => {
  return (
    <View style={homeStyle.header}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
        }}>
        Dashboard
      </Text>
    </View>
  );
};
