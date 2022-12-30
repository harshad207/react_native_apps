/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Fields = ({
  index,
  onChangeCompany,
  onChangeName,
  onChangeYear,
  onRemove,
}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text>Experience {index + 1}</Text>
        <TouchableOpacity
          onPress={() => {
            onRemove();
          }}>
          <Text style={{marginRight: 5, color: 'red'}}>Remove</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        placeholder="Enter Company Name"
        onChangeText={text => {
          onChangeCompany(text);
        }}
        style={{
          borderWidth: 0.5,
          //width: '90%',
          height: 50,
          borderRadius: 10,
          marginTop: 10,
          paddingLeft: 10,
        }}
      />
      <TextInput
        placeholder="Enter Name"
        onChangeText={text => {
          onChangeName(text);
        }}
        style={{
          borderWidth: 0.5,
          //width: '90%',
          height: 50,
          borderRadius: 10,
          marginTop: 10,
          paddingLeft: 10,
        }}
      />
      <TextInput
        placeholder="Enter start year"
        onChangeText={text => {
          onChangeYear(text);
        }}
        style={{
          borderWidth: 0.5,
          //width: '90%',
          height: 50,
          borderRadius: 10,
          marginTop: 10,
          paddingLeft: 10,
        }}
      />
    </View>
  );
};

export default Fields;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    // padding: 15,
  },
});
