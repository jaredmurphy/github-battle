import axios from 'axios';

const RootUrl = "https://api.github.com/users/"
const GITHUB_ID = process.env["GITHUB_ID"];
const GITHUB_SECRET = process.env["GITHUB_SECRET"];
export const FETCH_USER = "FETCH_USER";


export function fetchUser(username){
  const url = `${RootUrl}${username}?client_id=${GITHUB_ID}&client_secret=${GITHUB_SECRET}`;
  const request = axios.get(url);
  return {
    type: FETCH_USER,
    payload: request
  };
}
