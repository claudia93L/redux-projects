export const SET_CITY_FORECAST = 'SET_CITY_FORECAST';

export const setCityForecast = (newCityForecast) => {
  return {
    type: SET_CITY_FORECAST,
    payload: newCityForecast,
  };
};
