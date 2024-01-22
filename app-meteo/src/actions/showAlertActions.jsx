export const SET_SHOW_ALERT = 'SET_SHOW_ALERT';

export const setShowAlert = (newState) => {
  return {
    type: SET_SHOW_ALERT,
    payload: newState,
  };
};
