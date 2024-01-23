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
          className='my-3'
        ></Card.Img>
        <h1 className='my-3'>{cityData.main.temp}°C</h1>
        <div className='d-flex flex-column mt-5'>
          <div className='d-flex justify-content-around change-direction'>
            <Card.Text><b>Weather:</b> {cityData.weather[0].main}</Card.Text>
            <Card.Text><b>Wind:</b> {cityData.wind.speed} km/h</Card.Text>
          </div>
          <div className='d-flex justify-content-around change-direction'>
            <Card.Text>
            <b>Sunset:</b> {formatDateTime(cityData.sys.sunset * 1000)}
            </Card.Text>
            <Card.Text><b>Humidity:</b>  {cityData.main.humidity}%</Card.Text>
          </div>
        </div>
      </Card.Title>
    </Card>
  );
};
