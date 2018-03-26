import { CurrBlockTypes } from './types';

const MOVE_RATE = 2;

const currBlockActions = dispatch => ({
  moveLeft: x => {
    const newX = x - MOVE_RATE;
    dispatch({ type: CurrBlockTypes.MOVE_LEFT, payload:{ newX } })
  },
  moveRight: x => {
    const newX = x + MOVE_RATE;
    dispatch({ type: CurrBlockTypes.MOVE_RIGHT, payload:{ newX } })
  }
});

export default currBlockActions;