// in the reducers, I create a function that will contain a switch case with all the possible acrions avilable for the reducer
// for each case/action, it'll decide the "action" to make

// with the dispatch, we release the desired action as a called function, and the reducer will verify which action has been called and act accordingly
import { SET_CITY_NAME, SET_CITY_DATA } from '../actions/cityActions';

const initialState = {
  cityName: '',
  cityData: [],
};

const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CITY_NAME:
      return {
        ...state,
        cityName: action.payload,
      };
    case SET_CITY_DATA:
      return {
        ...state,
        cityData: action.payload,
      };
    default:
      return state;
  }
};

export default cityReducer;
