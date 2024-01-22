export const SET_CITY_FORECAST = 'SET_CITY_FORECAST';
export const SET_CITY_FORECAST_DATA = 'SET_CITY_FORECAST_DATA';

export const setCityForecast = (newCityForecast) => {
  return {
    type: SET_CITY_FORECAST,
    payload: newCityForecast,
  };
};

export const setCityForecastData = (forecastData) => {
  return {
    type: SET_CITY_FORECAST_DATA,
    payload: forecastData,
  };
};
