import axios from 'axios';

const RootUrl = "http://localhost:3001/api/v1/"
export const FETCH_PLAYER_ONE = "FETCH_PLAYER_ONE";
export const FETCH_PLAYER_TWO = "FETCH_PLAYER_TWO";
export const FETCH_BATTLE = "FETCH_BATTLE";


export function fetchPlayer(username, player){
  const url = `${RootUrl}players/${username}`;
  const request = axios.get(url);
  const TYPE = player === "playerOne" ? FETCH_PLAYER_ONE : FETCH_PLAYER_TWO;
  return {
    type: TYPE,
    payload: request
  };
}

export function fetchBattle(id){
  const url = `${RootUrl}battles/${id}`;
  const request = axios.get(url);
  const TYPE = FETCH_BATTLE;
  return {
    type: TYPE,
    payload: request
  };
}
