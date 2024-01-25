import { Container, Row, Col, Form } from 'react-bootstrap';
import Job from './Job';
import { useDispatch, useSelector } from 'react-redux';
import { SpinnerLoad } from './SpinnerLoad';
import { setQuery } from '../reducers/queryReducer';
import { setSpinner } from '../reducers/spinnerReducer';
import { setJobs } from '../reducers/jobsReducer';

const MainSearch = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.query.query);
  const jobs = useSelector((state) => state.jobs.jobs);

  const isLoading = useSelector((state) => state.spinner.stateSpinner);

  const baseEndpoint =
    'https://strive-benchmark.herokuapp.com/api/jobs?search=';

  // this function handles the setting of the query state in the redux store, taking the value from the input
  const handleChange = (e) => {
    dispatch(setQuery(e.target.value));
  };

  // this function manages the submit event and prevents default to avoid the reloading of the page
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // here we attempt to fetch from the API based on the query
      // when starting, it'll set the spinner state to true to show it's loading the data
      // if it goes well, it'll finally turn it to false
      // we handle the cases if the fetch doesn't go as expected
      const response = await fetch(baseEndpoint + query + '&limit=20');
      dispatch(setSpinner(true));
      if (response.ok) {
        const { data } = await response.json();
        dispatch(setJobs(data));
      } else {
        alert('Error fetching results');
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setSpinner(false));
    }
  };

  return (
    <Container style={{ marginTop: '8%' }}>
      <Row>
        <Col xs={10} className='mx-auto my-3'>
          <h1 className='display-1'>Remote Jobs Search</h1>
          <p>Find your dream job today!</p>
        </Col>
        <Col xs={10} className='mx-auto'>
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type='search'
              value={query}
              onChange={handleChange}
              placeholder='type and press Enter'
            />
          </Form>
        </Col>
        <Col xs={10} className='mx-auto mb-5'>
          {isLoading ? <SpinnerLoad></SpinnerLoad> : null}
          {jobs.map((jobData, index) => {
            // to make the index start from 1
            index += 1;
            const color = index % 2 === 0 ? 'bg-danger' : '';

            return (
              <Job
                number={index}
                key={jobData._id}
                data={jobData}
                color={color}
              ></Job>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
