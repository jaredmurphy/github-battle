import { FETCH_PLAYER_ONE } from '../actions/index';

export default function(state = null, action) {
  switch(action.type) {
    case FETCH_PLAYER_ONE:
      //console.log("++++++++++", action.payload.data);
      return action.payload.data;
    default:
      return state;
  }
}
