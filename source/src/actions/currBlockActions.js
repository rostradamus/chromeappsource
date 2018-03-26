import { CurrBlockActions } from './types';

const MOVE_RATE = 2;

const currBlockActions = dispatch => ({
  moveLeft: x => {
    const newX = x - MOVE_RATE;
    dispatch({ type: CurrBlockActions.MOVE_LEFT, payload:{ newX } })
  },
  moveRight: x => {
    const newX = x + MOVE_RATE;
    dispatch({ type: CurrBlockActions.MOVE_RIGHT, payload:{ newX } })
  }
});

export default currBlockActions;