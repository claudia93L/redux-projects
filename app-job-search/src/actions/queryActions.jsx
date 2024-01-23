export const SET_QUERY = 'SET_QUERY';

export const setQuery = (newQuery) => {
  return {
    type: SET_QUERY,
    payload: newQuery,
  };
};
