export const SET_QUERY = 'SET_QUERY';

type QueryActionsReturn = {
  type: string;
  payload: string;
};

export const setQuery = (newQuery: string): QueryActionsReturn => {
  return {
    type: SET_QUERY,
    payload: newQuery,
  };
};
