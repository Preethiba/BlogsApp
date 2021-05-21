import axios from 'axios';

export default (FETCH_POSTS = 'FETCH_POSTS');

const rootURL = 'http://reduxblog.herokuapp.com/api/';
const API_KEY = '?key=PREETHU1999';

export function fetchPosts() {
  const response = axios.get(`${rootURL}posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: response
  };
}
