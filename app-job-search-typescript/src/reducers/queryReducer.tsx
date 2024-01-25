import { SET_QUERY } from '../actions/queryActions';

type Action = {
  type: string;
  payload: string;
};

const initialState = {
  query: '',
};

const queryReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_QUERY:
      return {
        ...state,
        query: action.payload,
      };
    default:
      return state;
  }
};

export default queryReducer;
