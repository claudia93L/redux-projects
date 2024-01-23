import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';

const ChartCardComponent = ({ formatDateTime }) => {
  // I take the store data about the forecast
  const cityForecastData = useSelector(
    (state) => state.cityForecast.cityForecastData
  );

  // I extract the forecast data only about temperature
  const temperatureData = cityForecastData.map((dataPoint) => ({
    name: formatDateTime(dataPoint.dt_txt),
    temperature: dataPoint.main.temp,
  }));
  return (
    <div className='weather-card' style={{ marginBottom: '5rem' }}>
      <Card.Title className='weather-card-header'>
        <h5>Temperature stats over the next days</h5>
      </Card.Title>

      <ResponsiveContainer width='95%' height={200}>
        <AreaChart
          data={temperatureData}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Area type='monotone' dataKey='temperature' stroke='#0275d8' fill="#b8deff" />
          <CartesianGrid stroke='#b0daff' strokeDasharray='5 5' />
          <XAxis dataKey='name'></XAxis>
          <YAxis></YAxis>
          <Tooltip />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartCardComponent;
