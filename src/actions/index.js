import axios from 'axios';
import { browserHistory } from 'react-router';

const rootUrl = "https://open-source-champ-api.herokuapp.com/api/v1/";
//const rootUrl = "http://localhost:3001/api/v1/";

export const FETCH_PLAYER_ONE = "FETCH_PLAYER_ONE";
export const FETCH_PLAYER_TWO = "FETCH_PLAYER_TWO";
export const FETCH_BATTLE = "FETCH_BATTLE";
export const CREATE_BATTLE = "CREATE_BATTLE";
export const FETCH_TOP_BATTLES = "FETCH_TOP_BATTLES";
export const FETCH_RECENT_BATTLES = "FETCH_RECENT_BATTLES";


export function fetchPlayer(username, player){
  const url = `${rootUrl}search?login=${username}`;
  const request = axios.get(url);
  const TYPE = player === "playerOne" ? FETCH_PLAYER_ONE : FETCH_PLAYER_TWO;
  return {
    type: TYPE,
    payload: request
  };
}

export function fetchBattle(id){
  const url = `${rootUrl}battles/${id}`;
  const request = axios.get(url);
  const TYPE = FETCH_BATTLE;
  return {
    type: TYPE,
    payload: request
  };
}

export function createBattle(playerOneId, playerTwoId) {
  const url = `${rootUrl}battles/`;
  axios({
     method: 'post',
     url: url,
     data: {
      players: {
        player_one: playerOneId,
        player_two: playerTwoId
      }
    }
  }).then(response => {
    const battleId = response.data.id;
    browserHistory.push(`/battles/${battleId}`);
  }).catch(error => {
    console.log(error);
  });
}

export function fetchRecentBattles(){
  const url = `${rootUrl}battles/lists/recent`;
  const request = axios.get(url);
  const TYPE = FETCH_RECENT_BATTLES;
  return {
    type: TYPE,
    payload: request
  };
}

