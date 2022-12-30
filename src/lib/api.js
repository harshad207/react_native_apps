/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import axios from 'axios';
// import {getStorage} from '../util/storage';
// import {STORAGE} from '../util/storage';
const API_URL = 'http://localhost:4200';
const API_VERSION = '/api/v1/';
export const IMAGE_URL = API_URL + '/';

export async function callApi({url, method, body, headers}) {
  console.log('url===>', url);
  let headersData = {
    ...headers,
    // 'api-authorization': '3Uy7NIHilkOWviGXMRIl2ZUE4L7Mc8ub4VhosE3l8t8',
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache',
    Expires: '0',
  };

  //   const token = await getStorage(STORAGE.TOKEN);
  //   console.log('call api8888', token);
  //   if (token) {
  //     headersData.Authorization = token;
  //   }
  if (url.indexOf('file/single-upload') !== -1) {
    try {
      const data = new FormData();
      data.append('file', body);
      console.log('data=-------->', data);
      const result = await axios.post(API_URL + API_VERSION + url, data, {
        headers: {
          //   'api-authorization': '3Uy7NIHilkOWviGXMRIl2ZUE4L7Mc8ub4VhosE3l8t8',
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('body=--------->', result);
      if (result && result.data) {
        return result.data;
      }
      return null;
    } catch (err) {
      console.log('error file upload', err);
      //return await errorHandler(err);
    }
  } else {
    let configData = {};
    // eslint-disable-next-line eqeqeq
    if (method != 'GET') {
      configData = {
        method,
        url: API_URL + API_VERSION + url,
        data: body ? body : undefined,
        headers: headersData,
      };
    } else {
      configData = {
        method,
        url: API_URL + API_VERSION + url,
        headers: headersData,
      };
    }
    try {
      console.log('configData=>======>', configData);
      const result = await axios(configData);
      console.log('result axios=====>', result);
      if (result.data) {
        return result.data;
      }
      return null;
    } catch (err) {
      console.log('error axios', err);
      // return await errorHandler(err);
    }
  }
}
// export const errorHandler = error => {
//   const {request, response} = error;
//   // console.log(response);
//   if (response) {
//     console.log(response);
//     let result = response.data ? response.data : null;
//     let message = '';
//     if (result && result.status === false) {
//       let errors = result.errors ? result.errors : null;
//       if (errors && Array.isArray(errors) && errors.length > 0) {
//         message = errors[0].msg ? errors[0].msg : null;
//       } else {
//         message = result.msg ? result.msg : null;
//       }
//     }
//     return {
//       message: message ? message : null,
//       status: false,
//     };
//   } else if (request) {
//     return {
//       message: 'server time out',
//       status: false,
//     };
//   } else {
//     // Something happened in setting up the request that triggered an Error
//     return {
//       message: 'opps! something went wrong while setting up request',
//       status: false,
//     };
//   }
// };
