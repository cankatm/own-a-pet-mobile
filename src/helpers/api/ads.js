import axios from 'axios';

import * as defaults from '../DefaultValues';

export const getAllAds = async () => {
  let response = await axios.get(defaults.BASE_URL_AD + 'all');
  return response.data;
};

export const getMyAds = async token => {
  let response = await axios({
    method: 'get',
    url: defaults.BASE_URL_AD,
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json'
    }
  });
  return response.data;
};

export const addNewAd = async (
  title,
  content,
  age,
  city,
  district,
  petType,
  petBrand,
  petGender,
  phone,
  token
) => {
  let response = await axios({
    method: 'post',
    url: defaults.BASE_URL_AD,
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json'
    },
    data: {
      title,
      content,
      age: Number(age.trim()),
      city,
      district,
      petType,
      petBrand,
      petGender,
      phone: phone.trim()
    }
  });
  return response.data;
};

export const addNewAdImage = async (adID, token, image, indexOfImage) => {
  let response = await axios({
    method: 'post',
    url: defaults.BASE_URL_AD + adID + '/images/' + indexOfImage,
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json'
    },
    data: {
      base64: image.base64
    }
  });
  return response.data;
};
