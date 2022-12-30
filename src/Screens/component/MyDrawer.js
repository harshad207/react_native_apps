/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  PermissionsAndroid,
  Alert,
  Platform,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
const MyDrawer = props => {
  const data = [
    {
      id: '1',
      title: 'Location',
      img: require('../../assets/images/location.png'),
      link: 'address',
    },
    {
      id: '1',
      title: 'DynamicForm',
      img: require('../../assets/images/motion.png'),
      link: 'dynamicForm',
    },
  ];
  const [image, SetImage] = useState();
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log("Don 't have required permission.Please allow Permission");
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const uploadProfile = async () => {
    requestCameraPermission();
    const granted = await PermissionsAndroid;
    if (granted || Platform.OS === 'ios') {
      Alert.alert('Profile picture', 'Choose an option', [
        {text: 'Camera', onPress: onCamera},
        {text: 'Gallery', onPress: onGallery},
        {text: 'Cancel', onPress: () => {}},
      ]);
    }
  };
  const onCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      freeStyleCropEnabled: true,
    }).then(image => {
      console.log(image);
      SetImage(image.path);
    });
  };
  const onGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      freeStyleCropEnabled: true,
    }).then(image => {
      console.log('gallary', image.path);
      SetImage(image.path);
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={uploadProfile}>
        <Image
          source={
            image ? {uri: image} : require('../../assets/images/user.png')
          }
          style={styles.imageStyle}
        />
        <Text style={styles.userName}>User</Text>
      </TouchableOpacity>
      <View style={styles.line} />
      <FlatList
        keyExtractor={item => item.id}
        data={data}
        renderItem={({item}) => {
          return (
            <View>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate(item.link);
                }}>
                <View style={styles.viewStyle}>
                  <Image style={styles.icon} source={item.img} />
                  <Text style={styles.titleStyle}>{item.title}</Text>
                </View>
                {/* <View style={styles.line} /> */}
              </TouchableOpacity>
              <View style={styles.line} />
            </View>
          );
        }}
      />
    </View>
  );
};

export default MyDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageStyle: {
    height: 80,
    width: 80,
    alignSelf: 'center',
    marginTop: 15,
    borderRadius: 50,
    borderColor: '#000',
    borderWidth: 2,
  },
  userName: {
    color: '#000',
    alignSelf: 'center',
    marginTop: 5,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 15,
  },
  line: {
    width: '100%',
    borderBottomColor: ' #e0e0eb',
    borderBottomWidth: 1,
    height: 1,
  },
  viewStyle: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 5,
  },
  titleStyle: {
    color: '#000',
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 10,
    marginLeft: 10,
    color: '#cfc8c8',
  },
});
