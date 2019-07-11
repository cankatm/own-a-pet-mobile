import {
  CHANGE_EMAIL,
  CHANGE_BAYINO,
  CHANGE_PASSWORD
} from '../helpers/ActionNames.js';

export const changeEmail = email => {
  return {
    type: CHANGE_EMAIL,
    payload: email
  };
};

export const changeBayiNo = bayiNo => {
  return {
    type: CHANGE_BAYINO,
    payload: bayiNo
  };
};

export const changePassword = password => {
  return {
    type: CHANGE_PASSWORD,
    payload: password
  };
};
