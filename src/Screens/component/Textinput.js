/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
const width = Dimensions.get('window').width;

const Textinput = ({
  placeholder,
  title,
  onChangeText,
  value,
  secureTextEntry,
  keyboardType,
  editable,
  source,
  labelColor,
  righticon,
}) => {
  return (
    <View style={styles.mainView}>
      <Text style={[styles.label, {color: labelColor}]}>{title}</Text>
      <View style={styles.imgView}>
        <Image source={source} style={styles.iconeStyle} />
        <TextInput
          placeholder={placeholder}
          style={styles.input}
          value={value}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          editable={editable}
          //   placeholderTextColor={''}
          onChangeText={onChangeText}
        />
        <View style={styles.rightIcon}>{righticon}</View>
      </View>
    </View>
  );
};

export default Textinput;
const styles = StyleSheet.create({
  mainView: {},
  imgView: {
    flexDirection: 'row',
    borderWidth: 0.5,
    borderRadius: 8,
    height: 45,
  },
  iconeStyle: {
    height: 25,
    width: 25,
    top: 5,
    margin: 5,
    color: '#f0f0f5',
  },
  input: {
    width: width - 100,
    fontSize: 13,
    color: '#000',
  },
  label: {
    fontSize: 16,
  },
  rightIcon: {
    alignSelf: 'center',
    right: 10,
  },
});
