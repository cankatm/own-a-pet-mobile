import axios from 'axios';

import * as defaults from '../DefaultValues';

export const getAllAds = async () => {
  let response = await axios.get(defaults.BASE_URL_AD + 'all');
  return response.data;
};
