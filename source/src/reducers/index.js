import { combineReducers } from 'redux';
import blockReducer from './blockReducer';
import blockHistReducer from './blockHistReducer';
import currBlockReducer from './currBlockReducer';

export default combineReducers({
  block: blockReducer,
  blockHistory: blockHistReducer,
  currBlock: currBlockReducer
});