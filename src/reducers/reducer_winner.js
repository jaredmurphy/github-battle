import { FETCH_WINNER } from '../actions/index';

export default function(state = null, action) {
  switch(action.type) {
    case FETCH_WINNER:
      return { ...state, ...action.payload.data  };
    default:
      return state;
  }
}
