import { StyleSheet } from 'react-native';

import * as colors from '../helpers/ColorPalette';
import * as defaults from '../helpers/DefaultValues';

const MARGINED_WIDTH = defaults.WIDTH - 64;

export default StyleSheet.create({
  //HOME STYLES
  homePageContainerStyle: {
    width: defaults.WIDTH,
    height: defaults.HEIGHT
  },
  homePageImageBackgroundStyle: {
    width: defaults.WIDTH,
    height: defaults.HEIGHT
  },
  homePageTopInfoContainerStyle: {
    position: 'absolute',
    top: defaults.HEIGHT / 4 - 100,
    right: 16
  },
  homePageBottomInfoContainerStyle: {
    position: 'absolute',
    bottom: defaults.HEIGHT / 4 - 100,
    left: 16
  },
  homePageInfoInnerContainerStyle: {
    padding: 16,
    alignItems: 'flex-end',
    backgroundColor: colors.white,
    borderWidth: 4,
    borderColor: colors.black
  },
  homePageWritingTextStyle: {
    fontSize: 16
  },
  homePageButtonContainerStyle: {
    marginTop: 16,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.orange_oap,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: colors.black
  },
  //LOGIN STYLES
  loginPageContainerStyle: {
    width: defaults.WIDTH,
    height: defaults.HEIGHT,
    backgroundColor: colors.white
  },
  loginPageCenterAreaStyle: {
    width: defaults.WIDTH,
    height: defaults.HEIGHT - 300,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginPageTextInputAreaStyle: {
    width: MARGINED_WIDTH,
    marginTop: 24,
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  loginPageLabelTextStyle: {
    fontSize: 18
  },
  loginPageTextInputStyle: {
    width: defaults.WIDTH * 0.5,
    borderColor: 'gray',
    borderBottomWidth: 1,
    fontSize: 14,
    textAlign: 'right',
    textAlignVertical: 'top'
  },
  loginPageSwitchTextStyle: {
    fontSize: 14
  },
  loginPageButtonContainerStyle: {
    width: 60,
    height: 60,
    backgroundColor: colors.orange_oap,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center'
  },

  //SIGN AVATAR STYLES
  signAvatarPageContainerStyle: {
    width: defaults.WIDTH,
    height: defaults.HEIGHT,
    backgroundColor: colors.white
  },
  signAvatarPageImageAndWritingContainerStyle: {
    position: 'absolute',
    top: (defaults.HEIGHT - defaults.WIDTH) / 2,
    left: defaults.WIDTH / 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  signAvatarPageImageContainerStyle: {
    width: defaults.WIDTH / 2,
    height: defaults.WIDTH / 2,
    borderRadius: defaults.WIDTH / 4,
    backgroundColor: colors.white,
    borderWidth: 12,
    borderColor: colors.orange_oap,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  signAvatarPageXContainerStyle: {
    position: 'absolute',
    right: 4,
    top: 4,
    zIndex: 38
  },
  signAvatarPageXInnerContainerStyle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.orange_oap,
    borderWidth: 3,
    borderColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center'
  },
  signAvatarPageXTextStyle: {
    fontSize: 18,
    color: colors.white
  },
  signAvatarPageImageStyle: {
    width: defaults.WIDTH / 2,
    height: defaults.WIDTH / 2
  },
  signAvatarPagePlusTextStyle: {
    color: colors.black,
    fontSize: 84
  },
  signAvatarPageBodyImageContainerStyle: {
    position: 'absolute',
    top: defaults.HEIGHT / 2,
    left: defaults.WIDTH / 4
  },
  signAvatarPageBodyImageStyle: {
    width: defaults.WIDTH / 2,
    height: defaults.HEIGHT / 2
  },
  signAvatarPageButtonContainerStyle: {
    position: 'absolute',
    bottom: 32,
    right: 32
  },
  signAvatarPageButtonInnerContainerStyle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.orange_oap,
    borderWidth: 3,
    borderColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center'
  },

  //MY PROFILE STYLES
  myProfilePageContainerStyle: {
    width: defaults.WIDTH,
    height: defaults.HEIGHT,
    backgroundColor: colors.white
  },
  myProfilePageProfileImageContainerStyle: {
    width: defaults.WIDTH / 2,
    height: defaults.WIDTH / 2,
    borderRadius: defaults.WIDTH / 4,
    borderWidth: 12,
    borderColor: colors.orange_oap,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center'
  },
  myProfilePageProfileImageStyle: {
    width: defaults.WIDTH / 2,
    height: defaults.WIDTH / 2
  },
  myProfilePageVerificationContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  myProfilePageVerificationImageStyle: {
    marginLeft: 4,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.black,
    transform: [{ rotate: '90deg' }]
  },
  myProfilePageButtonContainerStyle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: colors.black,
    marginHorizontal: 8,
    backgroundColor: colors.orange_oap
  },
  myProfilePageIconImageStyle: {
    width: 16,
    height: 16
  },

  //NEW AD STYLES
  newAdPageContainerStyle: {
    width: defaults.WIDTH,
    height: defaults.HEIGHT,
    backgroundColor: colors.white
  },
  newAdPageRadioButtonButtonStyle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 4
  },
  newAdPageRadioButtonSelectedStyle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: colors.black
  },
  newAdPageTextInputAreaStyle: {
    width: defaults.WIDTH - 64,
    marginTop: 24,
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  newAdPageLabelTextStyle: {
    fontSize: 18
  },
  newAdPageTextInputStyle: {
    width: defaults.WIDTH * 0.5,
    borderColor: 'gray',
    borderBottomWidth: 1,
    fontSize: 14,
    textAlign: 'right',
    textAlignVertical: 'top'
  },
  newAdPageImageContainerStyle: {
    width: defaults.WIDTH / 4,
    height: defaults.WIDTH / 4,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 3,
    borderColor: colors.black,
    overflow: 'hidden'
  },
  newAdPageDeleteImageButtonContainerStyle: {
    position: 'absolute',
    top: 2,
    right: 2,
    zIndex: 32
  },
  newAdPageDeleteImageButtonInnerContainerStyle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.black,
    backgroundColor: colors.white
  },
  newAdPageImageStyle: {
    width: defaults.WIDTH / 4,
    height: defaults.WIDTH / 4
  },
  newAdPageSendButtonContainerStyle: {
    width: MARGINED_WIDTH,
    marginVertical: 32,
    alignItems: 'flex-end'
  },
  newAdPageSendButtonStyle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.orange_oap,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: colors.black
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
