/* eslint-disable prettier/prettier */
import {callApi} from './api';
import {BASE_URL} from '../lib/Constant';

export async function adminlogin(data) {
  //   console.log('service', data);
  return await callApi({
    url: BASE_URL.LOGIN_URL,
    method: 'POST',
    body: data,
  });
}

export async function register(data) {
  return await callApi({
    url: BASE_URL.REGISTER,
    method: 'POST',
    body: data,
  });
}
