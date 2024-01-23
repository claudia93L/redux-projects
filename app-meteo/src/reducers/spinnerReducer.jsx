import { SET_SPINNER } from '../actions/spinnerActions';

const initialState = {
  stateSpinner: false,
};

const spinnerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SPINNER:
      return {
        ...state,
        stateSpinner: action.payload,
      };
    default:
      return state;
  }
};

export default spinnerReducer;
