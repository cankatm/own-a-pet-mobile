import axios from 'axios';

import * as defaults from '../DefaultValues';

export const createUser = async (fullname, email, password) => {
  let response = await axios({
    method: 'post',
    url: defaults.BASE_URL_USER,
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      name: fullname,
      email,
      password
    }
  });
  return response.data;
};

export const loginUser = async (email, password) => {
  let response = await axios({
    method: 'post',
    url: defaults.BASE_URL_USER + 'login',
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      email,
      password
    }
  });
  return response.data;
};

export const getMyProfile = async token => {
  let response = await axios({
    method: 'get',
    url: defaults.BASE_URL_USER + 'me',
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
  return response.data;
};

export const uploadAvatar = async (token, image) => {
  // const data = new FormData();
  // data.append('name', 'image');
  // data.append('fileData', {
  //   uri: image.uri,
  //   type: image.type,
  //   name: image.fileName
  // });

  // let localUri = image.uri;
  // let filename = localUri.split('/').pop();

  // let match = /\.(\w+)$/.exec(filename);
  // let type = match ? `image/${match[1]}` : `image`;

  // let formData = new FormData();
  // formData.append('image', { uri: localUri, name: filename, type });

  let response = await axios({
    method: 'post',
    url: defaults.BASE_URL_USER + 'me/avatar',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    },
    data: JSON.stringify({
      base64: image.base64
    })
  });
  return response.data;
};
