import { useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';

const MiniCardComponent = ({ formatDateTime }) => {
  const cityForecastData = useSelector(
    (state) => state.cityForecast.cityForecastData
  );

  return (
    <div className='weather-card forecast-card'>
      <Card.Title className='weather-card-header'>
        <h5>Forecast every 3 hours for the next 5 days</h5>
      </Card.Title>
      <div className='d-flex flex-row flex-wrap justify-content-center row-gap-4'>
        {cityForecastData.map((el, index) => (
          <Card className='forecast px-4 py-2 text-center border-0' key={index}>
            <Card.Img
              className='w-50 mb-4 mx-auto'
              src={`./src/assets/weather-icons/${el.weather[0].icon}.png`}
              alt={el.weather[0].description}
            />
            <Card.Text className='font-mini-cards'>
              {formatDateTime(el.dt * 1000)}
            </Card.Text>
            <Card.Text className='font-mini-cards'>{el.main.temp}°C</Card.Text>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MiniCardComponent;
