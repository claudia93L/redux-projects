import { Button, InputGroup, Form, Container, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { setCityName } from '../actions/cityActions';
import { setCityForecast } from '../actions/cityForecastActions';
import { setSearch } from '../actions/searchActions';
import { useDispatch, useSelector } from 'react-redux';
import { setShowAlert } from '../actions/showAlertActions';

const Main = () => {
  // dichiaro la costante per utilizzare useNavigate, che sarà necessario per il passaggio al componente con il nuovo path
  const navigate = useNavigate();

  // dichiaro una costante dispatch per utilizzare useDispatch e richiamare le actions
  const dispatch = useDispatch();
  // dichiaro la costante searchedCity e con useSelector la inizializzo con lo stato globale
  const searchedCity = useSelector((state) => state.search.searchedCity);

  const showAlert = useSelector((state) => state.showAlert.stateAlert);

  // handleSearch gestisce la ricerca della città. si attiva al click sul bottone
  const handleSearch = () => {
    // dispatch delle varie actions dei reducers per valorizzare i valori di stato globali con la città cercata
    dispatch(setCityName(searchedCity));
    dispatch(setSearch(searchedCity));
    dispatch(setCityForecast(searchedCity));
    // se searchedCity è valorizzato (quindi l'input non è vuoto) al click si aprirà il nuovo componente
    if (searchedCity) {
      navigate(`/searchresults?searchedCity=${searchedCity}`);
      dispatch(setShowAlert(false));
    } else {
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
          <Alert variant='warning'>
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
