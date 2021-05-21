import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

const rootURL = 'https://reduxblog.herokuapp.com/api/';
const API_KEY = '?key=PREETHU1999';

export function fetchPosts() {
  const response = axios.get(`${rootURL}posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: response
  };
}
