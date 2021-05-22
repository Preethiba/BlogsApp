import { combineReducers } from 'redux';
import getPosts from './reducer_getPosts';

const rootReducer = combineReducers({
  posts: getPosts
});

export default rootReducer;
