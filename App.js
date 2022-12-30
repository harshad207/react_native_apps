import {Alert, BackHandler, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import AppNavigator from './AppNavigator';

const App = () => {
  const routeNameRef = useRef();
  const navigationRef = useNavigationContainerRef();
  useEffect(() => {
    const backAction = event => {
      if (routeNameRef.current === 'home' || routeNameRef.current === 'home') {
        Alert.alert('Hold on!', 'Are you sure you want to exit?', [
          {
            text: 'No',
            onPress: () => null,
            style: 'cancel',
          },
          {text: 'Yes', onPress: () => BackHandler.exitApp()},
        ]);
        return true;
      }
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.getCurrentRoute().name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.getCurrentRoute().name;
        if (previousRouteName !== currentRouteName) {
          console.log('currentRouteName=', currentRouteName);
        }
        routeNameRef.current = currentRouteName;
      }}>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
