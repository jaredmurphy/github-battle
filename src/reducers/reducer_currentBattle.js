import { FETCH_BATTLE } from '../actions/index';

export default function(state = null, action) {
  switch(action.type) {
    case FETCH_BATTLE:
      return action.payload.data;
    default:
      return state;
  }
}
