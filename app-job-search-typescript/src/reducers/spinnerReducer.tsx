import { SET_SPINNER } from '../actions/spinnerActions';

type Action = {
  type: string;
  payload: boolean;
};

const initialState = {
  stateSpinner: false,
};

const spinnerReducer = (state = initialState, action: Action) => {
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
