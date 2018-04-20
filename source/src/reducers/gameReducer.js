import { GamePlateActions } from "../actions/types";

const INITIAL_STATE = { 
  score: 0
};


export default (state = INITIAL_STATE, action) => {
  const payload = action.payload;
  switch (action.type) {
    case GamePlateActions.CREATE_BLOCK: {
      return Object.assign({...state}, { score: ++state.score });
    }
    case GamePlateActions.CLEAR_GAME: {
      return Object.assign({...state}, { score: 0 });
    }
    default:{
      return state;
    }
  }
};