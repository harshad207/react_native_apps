/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Lottie from 'lottie-react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const width = Dimensions.get('window').width;
import {Controller, useForm} from 'react-hook-form';
import Textinput from './component/Textinput';
import {adminlogin} from '../lib/Service';

const LoginScreen = ({navigation}) => {
  const [hide, SetHide] = useState(false);
  const {
    setValue,
    handleSubmit,
    control,
    reset,
    formState: {errors},
  } = useForm({
    defaultValues: {
      gmail: '',
      password: '',
    },
  });

  const onSubmit = async data => {
    console.log('uuuuu');
    // const response = await adminlogin(data);
    if (data) {
      navigation.navigate('homeStack');
    }
  };
  return (
    <View style={styles.container}>
      <Lottie
        source={require('../assets/facebook.json')}
        autoPlay
        loop
        speed={0.5}
        style={{height: 200, width: 300, top: -30}}
      />

      <View style={{top: -40}}>
        <Text style={styles.heading}>Login</Text>
        <View>
          <Controller
            control={control}
            name="gmail"
            rules={{
              required: true,
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <Textinput
                style={styles.input}
                placeholder={'Enter gmail'}
                source={require('../assets/images/mail.png')}
                value={value}
                onChangeText={text => onChange(text)}
                labelColor={'#000'}
              />
            )}
          />
        </View>
        {errors.gmail?.type === 'required' && (
          <Text style={{color: 'red'}}>This is required.</Text>
        )}
        {errors.gmail?.type === 'pattern' && (
          <Text style={{color: 'red'}}>Please enter valid email</Text>
        )}
        <View>
          <Controller
            control={control}
            name="password"
            rules={{
              required: true,
              pattern: {
                value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8}/,
                message: 'Please enter a valid password',
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <Textinput
                placeholder={'password'}
                source={require('../assets/images/lock.png')}
                title={''}
                labelColor={'#000'}
                onChangeText={text => onChange(text)}
                secureTextEntry={hide}
                value={value}
                keyboardType={'default'}
                righticon={
                  <TouchableOpacity
                    onPress={() => {
                      SetHide(!hide);
                    }}>
                    {hide ? (
                      <Ionicons name="md-eye-off-outline" size={25} />
                    ) : (
                      <Ionicons name="md-eye-outline" size={25} />
                    )}
                  </TouchableOpacity>
                }
              />
            )}
          />
        </View>
        {errors.password?.type === 'required' && (
          <Text style={{color: 'red'}}>This is required.</Text>
        )}
        {errors.password?.type === 'pattern' && (
          <Text style={{color: 'red'}}>Please enter valid password</Text>
        )}
        <View style={styles.btnView}>
          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            style={styles.btnStyle}>
            <Text style={styles.title}>Login</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: width - 100,
            marginLeft: 20,
          }}>
          <TouchableOpacity>
            <Text style={styles.forget}>Forget password</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('register');
            }}>
            <Text style={styles.forget}>Registration</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  heading: {
    color: '#000',
    fontWeight: '800',
    fontSize: 30,
    alignSelf: 'center',
  },
  btnView: {
    marginTop: 20,
    alignItems: 'center',
  },
  forget: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 15,
  },
  btnStyle: {
    backgroundColor: '#000',
    height: 40,
    width: width - 70,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#ffff',
  },
});
