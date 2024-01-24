import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Job = ({ data, color, number }) => {
  return (
    <Row className={`mx-0 mt-3 p-3 rounded-5 ${color}`}>
      <Col xs={3}>
        {number}. <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        <a href={data.url} target='_blank' rel='noreferrer'>
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

export default Job;
