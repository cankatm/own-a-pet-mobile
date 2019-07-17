import { Dimensions, Platform } from 'react-native';

export const BASE_URL_USER = 'https://own-a-pet.herokuapp.com/users/';
export const BASE_URL_AD = 'https://own-a-pet.herokuapp.com/ads/';

export const WIDTH = Dimensions.get('window').width;
export const HEIGHT =
  Platform.OS === 'ios'
    ? Dimensions.get('window').height - 20
    : Dimensions.get('window').height;
