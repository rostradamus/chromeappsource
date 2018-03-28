import { BlockHistActions } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
  case BlockHistActions.CREATE_BLOCK: {
    const block = action.payload;
    return state.concat(block);
  }
  case BlockHistActions.CLEAR_HISTORY: {
    return [];
  }
  default:
    return state;
  }
};