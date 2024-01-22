import { SET_CITY_FORECAST } from '../actions/cityForecastActions';

const initialState = {
  name: null,
};

const cityForecastReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CITY_FORECAST:
      return {
        ...state,
        nome: action.payload,
      };
    default:
      return state;
  }
};

export default cityForecastReducer;
