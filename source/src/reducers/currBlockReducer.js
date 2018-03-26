import { CurrBlockActions } from "../actions/types";

// dir (direction): "L" - left, "R" - right
export default (state = { width: 40, height: 20, x: 0, y: 0, dir: "R"}, action) => {
  const payload = action.payload;
  switch (action.type) {
    case CurrBlockActions.MOVE: {
        return Object.assign({...state}, { x: state.x + payload.rate });
    }
    case CurrBlockActions.TURN: {
      return Object.assign({...state}, { dir: payload.dir });
    }
    case CurrBlockActions.RELEASE: {
        return action.payload;
    }
    case CurrBlockActions.CREATE: {
        return action.payload;
    }
    default:{
      return state;
    }
  }
};