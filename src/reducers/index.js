import { combineReducers } from 'redux';
//import { reducer as formReducer } from 'redux-form';
import playerOneReducer from './reducer_playerOneInfo';
import playerTwoReducer from './reducer_playerTwoInfo';

const rootReducer = combineReducers({
      playerOneInfo: playerOneReducer,
      playerTwoInfo: playerTwoReducer
});

export default rootReducer;
