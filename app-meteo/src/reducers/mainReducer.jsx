import { combineReducers } from 'redux';
import cityReducer from './cityReducer';
import searchReducer from './searchReducer';
import cityForecastReducer from './cityForecastReducer';
import showAlertReducer from './showAlertReducer';

const mainReducer = combineReducers({
  city: cityReducer,
  search: searchReducer,
  cityForecast: cityForecastReducer,
  showAlert: showAlertReducer,
});

export default mainReducer;
