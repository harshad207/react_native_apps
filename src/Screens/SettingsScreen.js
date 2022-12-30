/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';
const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>SettingsScreen</Text>
    </View>
  );
};

export default SettingsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
