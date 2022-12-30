/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';
import Lottie from 'lottie-react-native';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('login');
    }, 3500);
  });
  return (
    <View style={styles.container}>
      <Lottie
        source={require('../assets/splash.json.json')}
        autoPlay
        loop={false}
        speed={0.5}
      />
    </View>
  );
};

export default SplashScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  textStyle: {
    fontSize: 20,
    color: '#000',
    fontWeight: '700',
  },
});
