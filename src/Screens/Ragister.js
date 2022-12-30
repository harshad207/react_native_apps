/* eslint-disable prettier/prettier */
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
const width = Dimensions.get('window').width;
import Lottie from 'lottie-react-native';
import {register} from '../lib/Service';

const Ragister = () => {
  const {
    setValue,
    handleSubmit,
    control,
    reset,
    formState: {errors},
  } = useForm({
    defaultValues: {
      fullname: '',
      gmail: '',
      mobile: '',
      password: '',
    },
  });

  const onSubmit = async data => {
    console.log('data', data);
    try {
      let response = await register(data);
      console.log('register res', response);
    } catch (error) {
      console.log('res', error);
    }
  };
  return (
    <View style={styles.container}>
      <Lottie
        source={require('../assets/facebook.json')}
        autoPlay
        loop
        speed={0.5}
        style={{height: 200, width: 300}}
      />
      <Text style={styles.register}>Register</Text>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Full Name</Text>
        <Controller
          control={control}
          name="fullname"
          rules={{required: true, maxLength: 15, minLength: 4}}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
              onChangeText={text => onChange(text)}
              value={value}
              placeholder="Full Name"
            />
          )}
        />
        {errors.fullname?.type === 'required' && (
          <Text style={{color: 'red'}}>This is required.</Text>
        )}
        {errors.fullname?.type === 'maxLength' && (
          <Text style={{color: 'red'}}>Maximum 15 Later allow.</Text>
        )}
        {errors.fullname?.type === 'minLength' && (
          <Text style={{color: 'red'}}>Minimum 4 Later allow.</Text>
        )}
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Gmail Address</Text>
        <Controller
          control={control}
          name="gmail"
          rules={{
            required: true,
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              // message: 'Please enter a valid email',
            },
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
              onChangeText={text => onChange(text)}
              value={value}
              placeholder="Gmail Address"
            />
          )}
        />
        {errors.gmail?.type === 'required' && (
          <Text style={{color: 'red'}}>This is required.</Text>
        )}
        {errors.gmail?.type === 'pattern' && (
          <Text style={{color: 'red'}}>Please enter valid email</Text>
        )}
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Mobile No.</Text>
        <Controller
          control={control}
          name="mobile"
          rules={{required: true, maxLength: 10, minLength: 10}}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
              onChangeText={text => onChange(text)}
              value={value}
              placeholder="Mobile"
              keyboardType="number-pad"
            />
          )}
        />
        {errors.mobile?.type === 'required' && (
          <Text style={{color: 'red'}}>This is required.</Text>
        )}
        {errors.mobile?.type === 'maxLength' && (
          <Text style={{color: 'red'}}>Maximum 10 number allow.</Text>
        )}
        {errors.mobile?.type === 'minLength' && (
          <Text style={{color: 'red'}}>Minimum 10 number allow.</Text>
        )}
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Password</Text>
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
            <TextInput
              style={styles.input}
              onChangeText={text => onChange(text)}
              value={value}
              placeholder="Password"
              secureTextEntry={true}
              keyboardType={'default'}
            />
          )}
        />
        {errors.password?.type === 'required' && (
          <Text style={{color: 'red'}}>This is required.</Text>
        )}
        {errors.password?.type === 'pattern' && (
          <Text style={{color: 'red'}}>Please enter valid password</Text>
        )}
      </View>
      <View style={styles.btnView}>
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          style={styles.btnStyle}>
          <Text style={styles.title}>Register</Text>
        </TouchableOpacity>
      </View>
      {/* <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        style={styles.btnStyle}>
        <Text style={styles.title}>Submit</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default Ragister;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  inputWrapper: {
    height: 80,
  },
  register: {
    color: '#000',
    fontSize: 25,
    fontWeight: '800',
  },
  label: {
    color: '#000',
    width: width - 50,
    fontSize: 17,
    marginTop: 7,
    marginBottom: 5,
  },
  input: {
    width: width - 60,
    borderColor: 'grey',
    borderWidth: 0.5,
    borderRadius: 8,
    fontSize: width * 0.04,
    color: 'black',
    height: 40,
  },
  btnView: {
    marginTop: 20,
    alignItems: 'center',
  },
  btnStyle: {
    backgroundColor: '#000',
    height: 40,
    width: width - 70,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  title: {
    color: '#ffff',
  },
});
