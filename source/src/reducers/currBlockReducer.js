import { CurrBlockActions } from "../actions/types";

const INITIAL_STATE = { 
  width: 40,
  height: 20,
  x: 0,
  y: 0,
  dir: 1,
  speed: 1
};
const SIZE_CHANGE_RATE = 0.9;
const SPEED_CHANGE_RATE = 1.1;


// dir (direction): -1 denotes left, 1 denotes right
export default (state = INITIAL_STATE, action) => {
  const payload = action.payload;
  switch (action.type) {
    case CurrBlockActions.MOVE: {
      const dir = state.dir;
      return Object.assign({...state}, { x: state.x + dir * state.speed });
    }
    case CurrBlockActions.TURN: {
      return Object.assign({...state}, { dir: payload.dir });
    }
    case CurrBlockActions.RELEASE: {
      return action.payload;
    }
    case CurrBlockActions.CREATE: {
      const { width, height, y, speed } = action.payload;
      const nextBlock = {
        width: width * SIZE_CHANGE_RATE,
        x: INITIAL_STATE.x,
        y: y + height,
        speed: speed * SPEED_CHANGE_RATE
      };
      return Object.assign({...state}, nextBlock);
    }
    default:{
      return state;
    }
  }
};