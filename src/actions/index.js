import axios from 'axios';
import { browserHistory } from 'react-router';


// localhost api
const RootUrl = "http://localhost:3001/api/v1/"

// github api
// const RootUrl = "https://api.github.com/users/"
// const GITHUB_ID = process.env.GITHUB_ID;
// const GITHUB_SECRET = process.env.GITHUB_SECRET;

export const FETCH_PLAYER_ONE = "FETCH_PLAYER_ONE";
export const FETCH_PLAYER_TWO = "FETCH_PLAYER_TWO";
export const FETCH_BATTLE = "FETCH_BATTLE";
export const CREATE_BATTLE = "CREATE_BATTLE";
export const FETCH_WINNER = "FETCH_WINNER";
export const FETCH_LOSER = "FETCH_LOSER";


export function fetchPlayer(username, player){
  // localhost api
  const url = `${RootUrl}search?login=${username}`;

  // github api
  //const url = `${RootUrl}${username}?client_id=${GITHUB_ID}&client_secret=${GITHUB_SECRET}`;

  const request = axios.get(url);
  const TYPE = player === "playerOne" ? FETCH_PLAYER_ONE : FETCH_PLAYER_TWO;
  return {
    type: TYPE,
    payload: request
  };
}

export function fetchPlayerById(playerId, player){

  // localhost api
  const url = `${RootUrl}players/${playerId}`;
  // github api
  //const url = `${RootUrl}${username}?client_id=${GITHUB_ID}&client_secret=${GITHUB_SECRET}`;

  const request = axios.get(url);
  const TYPE = player === "winner" ? FETCH_WINNER : FETCH_LOSER;
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

export function createBattle(playerOneId, playerTwoId) {
  const url = `${RootUrl}battles/`;
  axios({
     method: 'post',
     url: url,
     data: {
      players: {
        player_one: playerOneId,
        player_two: playerTwoId
      }
    }
  }).then(function(response){
    const battleId = response.data.id;
    browserHistory.push(`/battles/${battleId}`);
  });

  // const TYPE = CREATE_BATTLE;
  // return {
  //   type: TYPE,
  //   payload: request
  // };
}
