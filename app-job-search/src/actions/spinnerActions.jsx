export const SET_SPINNER = 'SET_SPINNER';

// this will handle the value's update of the spinner
export const setSpinner = (newState) => {
  return {
    type: SET_SPINNER,
    payload: newState,
  };
};
