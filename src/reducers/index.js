import { combineReducers } from 'redux';
//import { reducer as formReducer } from 'redux-form';
import playerBattleInfo from './reducer_playerBattleInfo';

const rootReducer = combineReducers({
      playerBattleInfo: playerBattleInfo
});

export default rootReducer;
