import { StyleSheet } from 'react-native';

import * as colors from '../../helpers/ColorPalette';
import * as defaults from '../../helpers/DefaultValues';

const ICON_SIZE = 18;
const ICON_CONTAINER_SIZE = 42;
const MARGIN_VALUE = 12;
const HEADER_HEIGHT = ICON_CONTAINER_SIZE + 2 * MARGIN_VALUE;

export default StyleSheet.create({
  //BACK HEADER
  staticLogoHeaderContainerStyle: {
    width: defaults.WIDTH,
    height: HEADER_HEIGHT,
    backgroundColor: colors.transparent,
    alignItems: 'center',
    justifyContent: 'center'
  },
  staticLogoHeaderTitleStyle: {
    fontSize: 24,
    color: colors.green_oap
  },
  //BACK HEADER
  backHeaderContainerStyle: {
    position: 'absolute',
    left: MARGIN_VALUE,
    top: MARGIN_VALUE,
    zIndex: 32
  },
  backHeaderInnerContainerStyle: {
    width: ICON_CONTAINER_SIZE,
    height: ICON_CONTAINER_SIZE,
    borderRadius: ICON_CONTAINER_SIZE / 2,
    backgroundColor: colors.green_oap,
    alignItems: 'center',
    justifyContent: 'center'
  },
  backHeaderIconImageStyle: {
    width: ICON_SIZE,
    height: ICON_SIZE
  },
  //HOME HEADER
  homeHeaderContainerStyle: {
    position: 'absolute',
    right: MARGIN_VALUE,
    top: MARGIN_VALUE,
    zIndex: 32
  },
  homeHeaderInnerContainerStyle: {
    width: ICON_CONTAINER_SIZE,
    height: ICON_CONTAINER_SIZE,
    borderRadius: ICON_CONTAINER_SIZE / 2,
    backgroundColor: colors.green_oap,
    alignItems: 'center',
    justifyContent: 'center'
  },
  homeHeaderIconImageStyle: {
    width: ICON_SIZE,
    height: ICON_SIZE
  }
});
