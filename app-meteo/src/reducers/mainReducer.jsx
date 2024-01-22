import { combineReducers } from 'redux';
import cityReducer from './cityReducer';
import searchReducer from './searchReducer';

const mainReducer = combineReducers({
  city: cityReducer,
  search: searchReducer,
});

export default mainReducer;
