import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainSearch from './components/MainSearch';
import CompanySearchResults from './components/CompanySearchResults';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<MainSearch />} />
          <Route path='/:company' element={<CompanySearchResults />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
