import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';

const rootURL = 'https://reduxblog.herokuapp.com/api/';
const API_KEY = '?key=PREETHU1999';

export function fetchPosts() {
  const response = axios.get(`${rootURL}posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: response
  };
}

export function createPost(values, callback) {
  const response = axios
    .post(`${rootURL}posts${API_KEY}`, values)
    .then(() => callback());

  return {
    type: CREATE_POST,
    payload: response
  };
}

export function fetchPost(id) {
  const response = axios.get(`${rootURL}posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: response
  };
}

export function deletePost(id, callback) {
  const response = axios
    .delete(`${rootURL}posts/${id}${API_KEY}`)
    .then(() => callback());

  return {
    type: DELETE_POST,
    payload: id
  };
}
