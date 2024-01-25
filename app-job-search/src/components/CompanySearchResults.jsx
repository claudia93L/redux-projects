import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Job from './Job';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCompanyJobs } from '../reducers/jobsReducer';

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
      // from the URL we take the parameter that is passed, which is the company, and fetch all their job listings
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
        <Col className='my-3 '>
          <div className='mb-5'>
            <h1 className='display-4'>
              Job posting for:
              <span className='text-danger'> {params.company}</span>
            </h1>
          </div>

          {companyJobs.map((jobData) => (
            <div className='bg-dark rounded-5'>
              <Job key={jobData._id} data={jobData}></Job>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
