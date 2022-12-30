/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <TouchableOpacity
          style={{marginLeft: 15}}
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Image
            source={require('../assets/images/menu.png')}
            style={styles.imageStyle}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: 'RobotoMono-SemiBold',
            fontSize: 20,
            marginLeft: 15,
            color: '#000',
          }}>
          HomeScreen
        </Text>
      </View>
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerView: {
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageStyle: {
    height: 25,
    width: 25,
  },
});
