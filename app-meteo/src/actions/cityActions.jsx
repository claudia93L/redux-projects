// the action is a function that returns an object and it'll have two keys: type and payload
// type will indicate the type of action and the payload the new value to set
// l'action will be managed by its specific reducer
export const SET_CITY_NAME = 'SET_CITY_NAME';
export const SET_CITY_DATA = 'SET_CITY_DATA';

// action per gestire la valorizzazione di CityName
// action to manage the value of cityName
export const setCityName = (newCityName) => {
  return {
    type: SET_CITY_NAME,
    payload: newCityName,
  };
};

// action to manage the setting of the cityData value - needed for the fetch
export const setCityData = (cityData) => {
  return {
    type: SET_CITY_DATA,
    payload: cityData,
  };
};
