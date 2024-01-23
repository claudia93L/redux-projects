import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import { useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';

const ChartCardComponent = () => {
  const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }];

  return (
    <div className='weather-card'>
      <Card.Title className='weather-card-header'>
        <h5>Temperature chart</h5>
      </Card.Title>

      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type='monotone' dataKey='uv' stroke='#8884d8' />
        <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default ChartCardComponent;
