import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Homepage from './pages/Homepage';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import SearchResult from './pages/SearchResult';
import { Provider } from 'react-redux';
import store from './store/store';
import { NotFound } from './components/NotFound';

// provider makes the Redux store available to all the nested components and they'll be able to access it
// with Route I assign the path where we'll go, and with element specify the component that we'll be lead to
const App = () => {
  return (
    <>
      <Provider store={store}>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Homepage></Homepage>}></Route>
          <Route
            path='/searchresults'
            element={<SearchResult></SearchResult>}
          ></Route>
          <Route path='*' element={<NotFound></NotFound>} />
        </Routes>
        <Footer></Footer>
      </Provider>
    </>
  );
};

export default App;
