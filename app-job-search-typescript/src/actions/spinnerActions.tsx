export const SET_SPINNER = 'SET_SPINNER';

type SpinnerActionsReturn = {
  type: string;
  payload: boolean;
};

export const setSpinner = (newState: boolean): SpinnerActionsReturn => {
  return {
    type: SET_SPINNER,
    payload: newState,
  };
};
