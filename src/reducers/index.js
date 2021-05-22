import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import getPosts from './reducer_getPosts';

const rootReducer = combineReducers({
  form: formReducer,
  posts: getPosts
});

export default rootReducer;
