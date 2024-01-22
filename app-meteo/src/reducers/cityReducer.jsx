// si crea una funzione contenente uno switch case con tutte le varie azioni a disposizione del reducer
// sceglierà l'operazione da svolgere a seconda del type dell'action

// con il dispatch "rilasciamo" l'action desiderata sotto forma di chiamata di funzione, e il reducer andrà a verificare quale action sia stata utilizzata per agire di conseguenza

import { SET_CITY_NAME, SET_CITY_DATA } from '../actions/cityActions';

const initialState = {
  cityName: null,
  cityData: null,
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
