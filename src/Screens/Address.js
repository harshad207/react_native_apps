/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const Address = () => {
  //const [activePanel, setActivePanel] = useState(false);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 23.0625646,
          longitude: 72.674234,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

export default Address;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
