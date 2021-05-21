import { combineReducers } from 'redux';
import getPosts from './reducer_getPosts';

const rootReducer = combineReducers({
  Posts: getPosts
});

export default rootReducer;
