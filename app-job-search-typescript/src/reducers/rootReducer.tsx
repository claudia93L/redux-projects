import { combineReducers } from 'redux';
import queryReducer from './queryReducer';
import jobsReducer from './jobsReducer';
import spinnerReducer from './spinnerReducer';

// with combineReducers I can create a root Reducer where to specify all the single reducers needed in the app
const rootReducer = combineReducers({
  query: queryReducer,
  jobs: jobsReducer,
  spinner: spinnerReducer,
});

export default rootReducer;
