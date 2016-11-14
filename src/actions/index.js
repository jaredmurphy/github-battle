import axios from 'axios';

// localhost api
//const RootUrl = "http://localhost:3001/api/v1/"

// github api
const RootUrl = "https://api.github.com/users/"
const GITHUB_ID = process.env.GITHUB_ID;
const GITHUB_SECRET = process.env.GITHUB_SECRET;

export const FETCH_PLAYER_ONE = "FETCH_PLAYER_ONE";
export const FETCH_PLAYER_TWO = "FETCH_PLAYER_TWO";
export const FETCH_BATTLE = "FETCH_BATTLE";


export function fetchPlayer(username, player){
  // localhost api
  //const url = `${RootUrl}players/${username}`;
  
  // github api
  const url = `${RootUrl}${username}?client_id=${GITHUB_ID}&client_secret=${GITHUB_SECRET}`;

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
