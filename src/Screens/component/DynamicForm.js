/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Fields from '../../Screens/component/Fields';

const DynamicForm = () => {
  const [data, SetData] = useState([{company: '', name: '', year: ''}]);
  const onChangeCompany = (ind, text) => {
    let value = data;
    value.map((item, index) => {
      if (index == ind) {
        item.company = text;
      }
    });
    console.log('=--->', value);
    SetData(value);
  };
  const onChangeName = (ind, text) => {
    let value = data;
    value.map((item, index) => {
      if (index == ind) {
        item.name = text;
      }
    });
    console.log('=--->', value);
    SetData(value);
  };
  const onChangeYear = (ind, text) => {
    let value = data;
    value.map((item, index) => {
      if (index == ind) {
        item.year = text;
      }
    });
    console.log('=--->', value);
    SetData(value);
  };
  return (
    <ScrollView contentContainerStyle={{paddingBottom: 50}}>
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({item, index}) => {
            return (
              <Fields
                index={index}
                onChangeCompany={text => {
                  onChangeCompany(index, text);
                }}
                onChangeName={text => {
                  onChangeName(index, text);
                }}
                onChangeYear={text => {
                  onChangeYear(index, text);
                }}
                onRemove={() => {
                  if (data.length > 1) {
                    data.splice(index, 1);
                    let newArry = [];
                    data.map(item => {
                      newArry.push(item);
                    });
                    SetData(newArry);
                  }
                }}
              />
            );
          }}
        />
        <TouchableOpacity
          style={{
            backgroundColor: '#000',
            width: '90%',
            borderRadius: 10,
            alignSelf: 'center',
            top: 15,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            data.push({company: '', name: '', year: ''});
            let newForm = [];
            data.map(item => {
              newForm.push(item);
              SetData(newForm);
            });
          }}>
          <Text style={{color: '#fff'}}>Add More Experience</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default DynamicForm;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});
