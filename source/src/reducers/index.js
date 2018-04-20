import { combineReducers } from 'redux';
import blockHistReducer from './blockHistReducer';
import currBlockReducer from './currBlockReducer';
import gameReducer from './gameReducer';

export default combineReducers({
  gameState: gameReducer,
  blockHistory: blockHistReducer,
  currBlock: currBlockReducer
});