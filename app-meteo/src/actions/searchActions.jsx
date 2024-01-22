export const SET_SEARCH = 'SET_SEARCH';

export const setSearch = (newSearch) => {
  return {
    type: SET_SEARCH,
    payload: newSearch,
  };
};

// esportazione nominale anzichè l'esportazione dell'intero codice con il default
