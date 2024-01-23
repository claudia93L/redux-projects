import { combineReducers } from 'redux';
import queryReducer from './queryReducer';
import jobsReducer from './jobsReducer';

// with combineReducers I can create a root Reducer where to specify all the single reducers needed in the app
const rootReducer = combineReducers({
  query: queryReducer,
  jobs: jobsReducer,
});

export default rootReducer;
