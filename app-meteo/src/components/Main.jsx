import { Button, InputGroup, Form, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { setCityName } from '../actions/cityActions';
import { setCityForecast } from '../actions/cityForecastActions';
import { setSearch } from '../actions/searchActions';
import { useDispatch, useSelector } from 'react-redux';

const Main = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const searchedCity = useSelector((state) => state.search.searchedCity);

  // handleSearch gestisce la ricerca della città. si attiva al click sul bottone
  const handleSearch = () => {
    // dispatch delle varie action dei reducers per valorizzare i valori di stato globali con la città cercata
    dispatch(setCityName(searchedCity));
    dispatch(setSearch(searchedCity));
    dispatch(setCityForecast(searchedCity));
    if (searchedCity) {
      navigate(`/searchresults?searchedCity=${searchedCity}`);
    }
  };

  return (
    <>
      <Container fluid className='d-flex justify-content-center flex-column'>
        <div className='text-center my-5'>
          <h1>How is the weather today?</h1>
          <p>Search for it down below to discover it</p>
        </div>
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
