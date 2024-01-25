export const SET_QUERY = 'SET_QUERY';

// action that handles the setting of the value in the redux store, which will store the job searched in the input
export const setQuery = (newQuery) => {
  return {
    type: SET_QUERY,
    payload: newQuery,
  };
};
