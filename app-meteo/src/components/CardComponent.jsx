import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export const CardComponent = ({ formatDateTime }) => {
  const cityData = useSelector((state) => state.city.cityData);

  // cityData.sys.sunset * 1000 because we have to convert it in milliseconds
  return (
    <Card className='weather-card border-0'>
      <Card.Title className='weather-card-header'>
        <h3>
          {cityData.name}, {cityData.sys.country}
        </h3>
        <Card.Img
          src={`./src/assets/weather-icons/${cityData.weather[0].icon}.png`}
          style={{ width: 150 }}
          alt={cityData.weather[0].description}
          className='my-2'
        ></Card.Img>
        <h1>{cityData.main.temp}°C</h1>

        <Card.Text>
          Weather: {cityData.weather[0].main} - Wind: {cityData.wind.speed} km/h
        </Card.Text>
        <Card.Text>
          Sunset: {formatDateTime(cityData.sys.sunset * 1000)}
        </Card.Text>
        <Card.Text>Humidity: {cityData.main.humidity}%</Card.Text>
      </Card.Title>
    </Card>
  );
};
