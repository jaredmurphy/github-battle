import axios from 'axios';

const RootUrl = "https://api.github.com/users/"
const GITHUB_ID = process.env["GITHUB_ID"];
const GITHUB_SECRET = process.env["GITHUB_SECRET"];
export const FETCH_PLAYER_ONE = "FETCH_PLAYER_ONE";
export const FETCH_PLAYER_TWO = "FETCH_PLAYER_TWO";


export function fetchPlayer(username, player){
  const url = `${RootUrl}${username}?client_id=${GITHUB_ID}&client_secret=${GITHUB_SECRET}`;
  const request = axios.get(url);
  const TYPE = player === "playerOne" ? FETCH_PLAYER_ONE : FETCH_PLAYER_TWO;
  return {
    type: TYPE,
    payload: request
  };
}
