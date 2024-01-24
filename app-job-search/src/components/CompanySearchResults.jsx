import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Job from './Job';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCompanyJobs } from '../actions/jobsActions';

const CompanySearchResults = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const companyJobs = useSelector((state) => state.jobs.companyJobs);

  const baseEndpoint =
    'https://strive-benchmark.herokuapp.com/api/jobs?company=';

  useEffect(() => {
    getJobs();
  });

  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.company);
      if (response.ok) {
        const { data } = await response.json();
        dispatch(setCompanyJobs(data));
      } else {
        alert('Error fetching results');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className='mt-4'>
      <Row>
        <Col className='my-3 rounded-5 py-4 px-5 bg-dark'>
          <div>
            <h1 className='display-4'>
              Job posting for:
              <span className='text-danger'> {params.company}</span>
            </h1>
          </div>

          {companyJobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
