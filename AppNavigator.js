/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  LogBox,
} from 'react-native';
import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyDrawer from './src/Screens/component/MyDrawer';
import SplashScreen from './src/Screens/SplashScreen';
import SettingsScreen from './src/Screens/SettingsScreen';
import HomeScreen from './src/Screens/HomeScreen';
import ProfileScreen from './src/Screens/profileScreen';
import {useNetInfo} from '@react-native-community/netinfo';
import Address from './src/Screens/Address';
import DynamicForm from './src/Screens/component/DynamicForm';
import LoginScreen from './src/Screens/LoginScreen';
import Ragister from './src/Screens/Ragister';

const Drawer = createDrawerNavigator();
export function HomeStack() {
  return (
    <Drawer.Navigator drawerContent={props => <MyDrawer {...props} />}>
      <Drawer.Screen
        name="bottomNavigation"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="dynamicForm"
        component={DynamicForm}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="address"
        component={Address}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
}

// tab navigation
const Tab = createBottomTabNavigator();
export function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: '#000',
      })}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={require('./src/assets/images/home.png')}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? 'tomato' : '#000',
                }}
              />
            );
          },
        }}
        name="main"
        component={MainStack}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'settings',

          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={require('./src/assets/images/setting.png')}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? 'tomato' : '#000',
                }}
              />
            );
          },
        }}
        name="Settings"
        component={settingStack}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'profile',
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={require('./src/assets/images/profile.png')}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? 'tomato' : '#000',
                }}
              />
            );
          },
        }}
        name="profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}
const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const settingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="settings"
        component={SettingsScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

//  Stack navigator
const Stack = createStackNavigator();
const AppNavigator = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['']);
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);
  const internetState = useNetInfo();
  if (internetState.isConnected === false) {
    const retry = () => {
      internetState.isConnected === true;
    };
    return (
      <View style={styles.centered}>
        <Text style={styles.title}>
          Please turn on the Internet to use our app!
        </Text>
        <TouchableOpacity style={styles.Retry} onPress={retry}>
          <Text style={styles.btn}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <Stack.Navigator initialRouteName="splash">
        <Stack.Screen
          name="splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="register"
          component={Ragister}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="homeStack"
          component={HomeStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  }
};

const styles = StyleSheet.create({
  centered: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    color: '#000',
  },
  Retry: {
    backgroundColor: '#ff6600',
    height: 40,
    borderRadius: 7,
    width: 100,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    color: '#ffff',
    fontSize: 18,
    fontWeight: '500',
  },
});
export default AppNavigator;
