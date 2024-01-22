import { SET_SHOW_ALERT } from '../actions/showAlertActions';

const initialState = {
  stateAlert: false,
};

const showAlertReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SHOW_ALERT:
      return {
        ...state,
        stateAlert: action.payload,
      };
    default:
      return state;
  }
};

export default showAlertReducer;
