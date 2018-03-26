import { CurrBlockActions } from './types';

// const MOVE_RATE = 2;

const currBlockActions = dispatch => ({
  move: rate => {
    dispatch({ type: CurrBlockActions.MOVE, payload:{ rate } })
  },
  turn: dir => {
    dispatch({ type: CurrBlockActions.TURN, payload: { dir }})
  }
});

export default currBlockActions;