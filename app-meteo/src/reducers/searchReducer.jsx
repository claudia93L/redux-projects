import { SET_SEARCH } from '../actions/searchActions';

const initialState = {
    searchedCity: '',
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH:
      return {
        ...state,
        searchedCity: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
