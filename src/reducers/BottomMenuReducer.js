import {
  CHANGE_EMAIL,
  CHANGE_BAYINO,
  CHANGE_PASSWORD
} from '../helpers/ActionNames.js';

const INITIAL_STATE = {
  email: '',
  bayiNo: '',
  password: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_EMAIL:
      return { ...state, email: action.payload };
    case CHANGE_BAYINO:
      return { ...state, bayiNo: action.payload };
    case CHANGE_PASSWORD:
      return { ...state, password: action.payload };
    default:
      return state;
  }
};
