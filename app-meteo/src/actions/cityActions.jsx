// l'action è una funzione che ritorna un oggetto e avrà due chiavi:
// type - che indicherà il tipo di azione e payload che sarà il nuovo valore da impostare
// l'action sarà gestita dal suo specifico reducer

export const SET_CITY_NAME = 'SET_CITY_NAME';
export const SET_CITY_DATA = 'SET_CITY_DATA';

export const setCityName = (newCityName) => {
  return {
    type: SET_CITY_NAME,
    payload: newCityName,
  };
};

export const setCityData = (data) => {
  return {
    type: SET_CITY_DATA,
    payload: data,
  };
};
