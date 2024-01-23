export const SET_SPINNER = 'SET_SPINNER';

export const setSpinner = (newState) => {
  return {
    type: SET_SPINNER,
    payload: newState,
  };
};
