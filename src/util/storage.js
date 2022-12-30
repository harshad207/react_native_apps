/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';
import {IMAGE_URL} from '../lib/api';

export function setStorage(key, data) {
  AsyncStorage.setItem(key, JSON.stringify(data));
}

export function checkImage(imgurl) {
  if (imgurl && imgurl.indexOf('http') != -1) {
    return imgurl;
  }
  return IMAGE_URL + imgurl;
}

export function removeStorage(key) {
  AsyncStorage.removeItem(key);
}

export async function getStorage(key) {
  const item = await AsyncStorage.getItem(key);
  return await JSON.parse(item);
}
