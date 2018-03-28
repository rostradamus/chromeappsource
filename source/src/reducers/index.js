import { combineReducers } from 'redux';
import blockHistReducer from './blockHistReducer';
import currBlockReducer from './currBlockReducer';

export default combineReducers({
  blockHistory: blockHistReducer,
  currBlock: currBlockReducer
});