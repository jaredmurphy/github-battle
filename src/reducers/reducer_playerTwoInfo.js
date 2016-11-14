import { FETCH_PLAYER_TWO } from '../actions/index';

export default function(state = null, action) {
  switch(action.type) {
    case FETCH_PLAYER_TWO:
      return { ...state, playerTwoInfo: action.payload.data  };
    default:
      return state;
  }
}
