import { combineReducers } from 'redux';
import cityReducer from './cityReducer';
import searchReducer from './searchReducer';
import cityForecastReducer from './cityForecastReducer';

const mainReducer = combineReducers({
  city: cityReducer,
  search: searchReducer,
  cityForecast: cityForecastReducer,
});

export default mainReducer;
