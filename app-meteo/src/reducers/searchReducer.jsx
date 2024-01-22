import { SET_CITY_NAME } from '../actions/cityActions';

const initialState = {
  name: '',
};

const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CITY_NAME:
      return {
        ...state,
        nome: action.payload,
      };
    default:
      return state;
  }
};

export default cityReducer;
