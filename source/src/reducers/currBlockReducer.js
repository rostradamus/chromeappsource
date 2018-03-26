import { CurrBlockActions } from "../actions/types";

export default (state = { x: 50, width: 40, height: 20, y: 0 }, action) => {
    switch (action.type) {
    case CurrBlockActions.MOVE_LEFT: {
        return Object.assign({...state}, action.payload);
    }
    case CurrBlockActions.MOVE_RIGHT: {
        return Object.assign({...state}, action.payload);
    }
    case CurrBlockActions.RELEASE_BLOCK: {
        return action.payload;
    }
    case CurrBlockActions.CREATE_BLOCK: {
        return action.payload;
    }
    default:
        return state;
    }
};