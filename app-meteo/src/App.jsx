import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Homepage from './pages/Homepage';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import SearchResult from './pages/SearchResult';
import { Provider } from 'react-redux';
import store from './store/store';

const App = () => {
  return (
    <>
      <Provider store={store}></Provider>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
        <Route
          path='/searchresults'
          element={<SearchResult></SearchResult>}
        ></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
};

export default App;
