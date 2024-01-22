import { Card } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCityData } from '../actions/cityActions';
import { setCityForecastData } from '../actions/cityForecastActions';
import { NotFound } from '../components/NotFound';
import { SpinnerLoad } from '../components/SpinnerLoad';

export const CardComponent = () => {
  const dispatch = useDispatch();
  // initialize all the consts with their global state
  const searchedCity = useSelector((state) => state.search.searchedCity);
  const cityData = useSelector((state) => state.city.cityData);
  const cityForecastData = useSelector(
    (state) => state.cityForecast.cityForecastData
  );

  // I chose to use the useState instead of doing it with Redux, because I didn't have a lot of time left and because this state was meant to be used only in this componente
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
          // else it'll throw a console error
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
  // isLoading will shoe the spinner while the data is loading
  // the card will show only if the data is successfully loaded
  // otherwise it'll show the NotFound component
  return (
    <div className='d-flex justify-content-center mb-5'>
      {isLoading ? (
        <SpinnerLoad></SpinnerLoad>
      ) : cityData && cityForecastData && cityData.weather ? (
        <Card className='text-center mt-1 mb-5 w-50'>
          <Card.Header className='bg-warning'>
            Today's weather in the city of {searchedCity}
          </Card.Header>
          <Card.Body className='px-0'>
            {cityData && (
              <>
                <Card.Img
                  src={`./src/assets/weather-icons/${cityData.weather[0].icon}.png`}
                  style={{ width: 150 }}
                  alt={cityData.weather[0].description}
                  className='my-2'
                ></Card.Img>
                <Card.Title className='display-5 mb-4'>
                  {cityData.name}, {cityData.sys.country}
                </Card.Title>
                <Card.Text>
                  Temperature: <b>{cityData.main.temp}°C</b>
                </Card.Text>
                <Card.Text>
                  Perceived temperature: <b>{cityData.main.feels_like} °C</b>
                </Card.Text>
                <Card.Text>
                  Weather: <b>{cityData.weather[0].main}</b>
                </Card.Text>
                <Card.Text>
                  Description: <b>{cityData.weather[0].description}</b>
                </Card.Text>
                <Card.Text>
                  Wind speed: <b>{cityData.wind.speed} km/h</b>
                </Card.Text>
                <Card.Text>
                  Humidity: <b>{cityData.main.humidity}%</b>
                </Card.Text>
                <div className='bg-dark text-light py-3 mb-0'>
                  <h6>Keep scrolling to discover the full forecast</h6>
                </div>

                {cityForecastData.map((el, i) => {
                  const isEven = i % 2 === 0;
                  const bgClass = isEven ? 'bg-light' : '';

                  return (
                    <div
                      key={el.dt}
                      className={`d-flex flex-row px-3 py-2 justify-content-center ${bgClass}`}
                    >
                      <img
                        src={`./src/assets/weather-icons/${el.weather[0].icon}.png`}
                        alt={el.weather[0].description}
                        style={{ width: 100 }}
                      />
                      <div className='d-flex flex-column text-left mx-5 justify-content-center'>
                        <h5>{el.main.temp}°C</h5>
                        <p>Date: {formatDateTime(el.dt_txt)}</p>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </Card.Body>
        </Card>
      ) : (
        <NotFound></NotFound>
      )}
    </div>
  );
};
