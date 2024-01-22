import {
  SET_CITY_FORECAST,
  SET_CITY_FORECAST_DATA,
} from '../actions/cityForecastActions';

const initialState = {
  cityForecastName: null,
};

const cityForecastReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CITY_FORECAST:
      return {
        ...state,
        cityForecastName: action.payload,
      };
    case SET_CITY_FORECAST_DATA:
      return {
        ...state,
        cityForecastData: action.payload,
      };
    default:
      return state;
  }
};

export default cityForecastReducer;
