import { combineReducers } from 'redux';

import BottomMenuReducer from './BottomMenuReducer';

export default combineReducers({
  formReducer: BottomMenuReducer
});
