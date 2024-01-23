import { CardComponent } from '../components/CardComponent';
import { useLocation } from 'react-router-dom';

import MiniCardComponent from '../components/MiniCardComponent';
import ChartCardComponent from '../components/ChartCardComponent';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { setCityData } from '../actions/cityActions';
import { setCityForecastData } from '../actions/cityForecastActions';
import { useEffect, useState } from 'react';
import { SpinnerLoad } from '../components/SpinnerLoad';

const SearchResult = () => {
  const location = useLocation();
  const searchedCity = new URLSearchParams(location.search).get('searchedCity');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // initialize all the consts with their global state
  const cityData = useSelector((state) => state.city.cityData);
  const cityForecastData = useSelector(
    (state) => state.cityForecast.cityForecastData
  );

  // I chose to use the useState instead of doing it with Redux, because I didn't have a lot of time left and because this state was meant to be used only in this component
  const [isLoading, setIsLoading] = useState(false);

  const baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
  const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?q=';
  const apiKey = '&APPID=1b2c78e3829adfa6630d5a8e796fba86&units=metric';

  // two fetch needed to get data about today's weather of the searched city and the forecest data
  // I chose to edit my project and put them both in the same fetch to speed the loading process
  const fetchData = async () => {
    setIsLoading(true);
    try {
      if (searchedCity) {
        const todayWeatherResp = fetch(baseURL + searchedCity + apiKey);
        const forecastResp = fetch(forecastURL + searchedCity + apiKey);

        // Promise.all accepts a Promises array, and returns a new Promise which will be resolved when all the promises in the array are resolved
        // await makes sure that the code execution will stop until the promises are resolved
        // destructuring the array gives me the opportunity to have two distinct constants containing the two array elements
        const [todayResponse, forecastResponse] = await Promise.all([
          todayWeatherResp,
          forecastResp,
        ]);

        // if the response of both requests is okay, the it'll dispatch the actions and update the status with the data coming from the API
        if (todayResponse.ok && forecastResponse.ok) {
          const weatherData = await todayResponse.json();
          const forecastData = await forecastResponse.json();
          dispatch(setCityData(weatherData));
          dispatch(setCityForecastData(forecastData.list));
        } else {
          // else it'll throw a console error and I'll redirect the user to the 404 page
          navigate('*');
          console.error(
            'The HTTP request was successful, but there was an error fetching the data.'
          );
        }
      }
      // the catch will capture the error if the response is not succesful
    } catch (error) {
      console.error('Error in the HTTP request:', error);
      // finally, it'll set the status of the loader to false
    } finally {
      setIsLoading(false);
    }
  };

  // fetch needed to get data about future forecasts of the searched city
  // at every update of searchedCity, the two fetches will be called
  useEffect(() => {
    fetchData();
  }, [searchedCity]);

  // function that takes the forecast date and time and formats it to be more readable
  function formatDateTime(timestamp) {
    const fullDate = new Date(timestamp);
    const day = String(fullDate.getDate()).padStart(2, '0');
    const month = String(fullDate.getMonth() + 1).padStart(2, '0');
    const hour = String(fullDate.getHours()).padStart(2, '0');
    const minutes = String(fullDate.getMinutes()).padStart(2, '0');
    return `${day}/${month} - ${hour}:${minutes}`;
  }

  // the html has a few checks, to make sure it'll load only if the data about the city is there. otherwise will show a brief message
  // isLoading will show the spinner while the data is loading
  // the cards will show only if the data is successfully loaded
  return (
    <div className='card-container container d-flex flex-column flex-lg-row mx-auto'>
      {isLoading ? (
        <SpinnerLoad></SpinnerLoad>
      ) : cityData && cityForecastData && cityData.weather ? (
        <div className='w-100'>
          <CardComponent formatDateTime={formatDateTime}></CardComponent>
        </div>
      ) : null}
      {cityForecastData ? (
        <div className='d-flex flex-column w-100 more-width'>
          <MiniCardComponent
            formatDateTime={formatDateTime}
          ></MiniCardComponent>
          <ChartCardComponent
            formatDateTime={formatDateTime}
          ></ChartCardComponent>
        </div>
      ) : null}
    </div>
  );
};

export default SearchResult;
