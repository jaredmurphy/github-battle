import { combineReducers } from 'redux';
//import { reducer as formReducer } from 'redux-form';
import playerOneReducer from './reducer_playerOneInfo';
import playerTwoReducer from './reducer_playerTwoInfo';
import battleReducer from './reducer_currentBattle';

const rootReducer = combineReducers({
      playerOneInfo: playerOneReducer,
      playerTwoInfo: playerTwoReducer,
      currentBattle: battleReducer
});

export default rootReducer;
