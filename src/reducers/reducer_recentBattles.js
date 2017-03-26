import { FETCH_RECENT_BATTLES } from '../actions/index';

export default function(state = null, action) {
  switch(action.type) {
    case FETCH_RECENT_BATTLES:
      return action.payload.data;
    default:
      return state;
  }
}
