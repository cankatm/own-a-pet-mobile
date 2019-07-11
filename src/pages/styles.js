import { StyleSheet } from 'react-native';

import * as colors from '../helpers/ColorPalette';
import * as defaults from '../helpers/DefaultValues';

export default StyleSheet.create({
  //LOGIN STYLES
  loginPageContainerStyle: {
    width: defaults.WIDTH,
    height: defaults.HEIGHT
  },

  //RESULTS STYLES
  resultsPageContainerStyle: {
    width: defaults.WIDTH,
    height: defaults.HEIGHT,
    backgroundColor: colors.white
  },

  //RESULTS DETAIL STYLES
  resultDetailPageContainerStyle: {
    width: defaults.WIDTH,
    height: defaults.HEIGHT,
    backgroundColor: colors.white
  },
  resultDetailPageSwiperContainerStyle: {
    width: defaults.WIDTH,
    height: defaults.WIDTH
  }
});
