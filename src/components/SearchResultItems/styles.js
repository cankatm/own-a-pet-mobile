import { StyleSheet, Dimensions } from 'react-native';

import * as colors from '../../helpers/ColorPalette';
const { width } = Dimensions.get('window');

const CARD_SIZE = width - 32;
const BORDER_SIZE = 1;
const BORDER_RADIUS = 12;

export default StyleSheet.create({
  petResultItemContainerStyle: {
    width: CARD_SIZE,
    height: CARD_SIZE * 1.25,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: BORDER_SIZE,
    borderColor: 'black',
    borderRadius: BORDER_RADIUS,
    overflow: 'hidden',
    marginTop: 16
  },
  petResultItemImageStyle: {
    width: CARD_SIZE - BORDER_SIZE * 2,
    height: CARD_SIZE - BORDER_SIZE * 2
  },
  petResultItemInfoContainerStyle: {
    width: CARD_SIZE,
    height: CARD_SIZE / 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: BORDER_SIZE,
    borderColor: colors.black,
    backgroundColor: colors.lightGrey
  },
  petResultItemPetImageStyle: {
    width: CARD_SIZE / 8,
    height: CARD_SIZE / 8,
    marginLeft: 8
  },
  petResultPetInfoContainerStyle: {
    marginRight: 8,
    alignItems: 'flex-end'
  }
});
