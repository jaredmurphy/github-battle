import { combineReducers } from 'redux';
import playerOneReducer from './reducer_playerOneInfo';
import playerTwoReducer from './reducer_playerTwoInfo';
import battleReducer from './reducer_currentBattle';
import recentBattlesReducer from './reducer_recentBattles';

const rootReducer = combineReducers({
      playerOneInfo: playerOneReducer,
      playerTwoInfo: playerTwoReducer,
      currentBattle: battleReducer,
      recentBattles: recentBattlesReducer
});

export default rootReducer;
