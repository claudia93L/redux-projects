import { Button, InputGroup, Form, Container, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { setCityName } from '../actions/cityActions';
import { setCityForecast } from '../actions/cityForecastActions';
import { setSearch } from '../actions/searchActions';
import { useDispatch, useSelector } from 'react-redux';
import { setShowAlert } from '../actions/showAlertActions';

const Main = () => {
  // I declare a constant to use useNavigate, needed to pass on a new component with a new path
  const navigate = useNavigate();

  // I declare a constant to use useDispatch and call the needed actions
  const dispatch = useDispatch();

  // I declare a constant, searchedCity, and with useSelector I initialize it at the global state value
  const searchedCity = useSelector((state) => state.search.searchedCity);

  const showAlert = useSelector((state) => state.showAlert.stateAlert);

  // handleSearch handles the city's search, being activated at the button click
  const handleSearch = () => {
    // dispatch of various actions of the reducers, to give the global values the searched city value
    dispatch(setCityName(searchedCity));
    dispatch(setSearch(searchedCity));
    dispatch(setCityForecast(searchedCity));
    // if searchedCity has a value (the input is not emptu) ten at the button click will open the new component
    if (searchedCity) {
      navigate(`/searchresults?searchedCity=${searchedCity}`);
      dispatch(setShowAlert(false));
    } else {
      // otherwise will set the showAlert to true and show a warning alert to the user
      dispatch(setShowAlert(true));
    }
  };

  return (
    <>
      <Container fluid className='d-flex justify-content-center flex-column'>
        <div className='text-center my-5'>
          <h1>How is the weather today?</h1>
          <p>Search for it down below to discover it</p>
        </div>
        {showAlert && (
          <Alert
            variant='warning'
            className='w-50 text-center align-self-center'
          >
            Campo vuoto! Per favore, inserisci una città
          </Alert>
        )}
        <InputGroup className='mb-3 w-50 mx-auto'>
          <Form.Control
            placeholder='Search for a city...'
            type='text'
            name='search'
            value={searchedCity}
            onChange={(e) => dispatch(setSearch(e.target.value))}
          />
          <Button onClick={handleSearch} variant='btn btn-primary'>
            Search
          </Button>
        </InputGroup>
      </Container>
    </>
  );
};

export default Main;
