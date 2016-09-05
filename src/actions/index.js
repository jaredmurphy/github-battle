import axios from 'axios';

const RootUrl = "https://api.github.com/users/"
const GITHUB_ID = '362e324cfd5da01f5d45';
const GITHUB_SECRET = '247f837d1cadde6da803f1e5fe67db3800370c64';
export const FETCH_USER = "FETCH_USER";


export function fetchUser(username){
  const url = `${RootUrl}${username}?client_id=${GITHUB_ID}&client_secret=${GITHUB_SECRET}`;
  const request = axios.get(url);
  console.log(request.data)
  return {
    type: FETCH_USER,
    payload: request
  };
}
