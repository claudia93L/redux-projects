import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Job = ({ data, color, number }) => {
  // {number && `${number}.`} if number is true, then it'll add the index number and the dot
  return (
    <Row className={`mx-0 mt-3 p-3 rounded-5 ${color}`}>
      <Col xs={3}>
        {number && `${number}.`}{' '}
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={5} className='fw-bold'>
        <a href={data.url} target='_blank' rel='noreferrer'>
          {data.title}
        </a>
      </Col>
      <Col xs={2}>
        <p>{data.candidate_required_location}</p>
      </Col>
      <Col xs={2}>
        <p>{data.category}</p>
      </Col>
    </Row>
  );
};

export default Job;
