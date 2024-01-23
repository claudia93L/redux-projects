import { combineReducers } from 'redux';
import cityReducer from './cityReducer';
import searchReducer from './searchReducer';
import cityForecastReducer from './cityForecastReducer';
import showAlertReducer from './showAlertReducer';

// with combineReducers I can create a root Reducer where to specify all the single reducers needed in the app
const rootReducer = combineReducers({
  city: cityReducer,
  search: searchReducer,
  cityForecast: cityForecastReducer,
  showAlert: showAlertReducer,
});

export default rootReducer;
