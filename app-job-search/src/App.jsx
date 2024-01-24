import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CompanySearchResults from './components/CompanySearchResults';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Homepage from './pages/Homepage';
import NavbarComponent from './components/NavbarComponent';
import Footer from './components/Footer';

// using path='/:company' the URL will require the company id to go into the component
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <header className='position-fixed top-0 py-1 w-100 border-bottom border-1' style={{backgroundColor: '#131d31'}}>
          <NavbarComponent></NavbarComponent>
        </header>
        <div className='py-5'>
          <Routes>
            <Route path='/' element={<Homepage></Homepage>} />
            <Route
              path='/:company'
              element={<CompanySearchResults></CompanySearchResults>}
            />
          </Routes>
        </div>
        <Footer></Footer>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
