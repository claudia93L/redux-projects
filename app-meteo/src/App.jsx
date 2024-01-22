import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Homepage from './pages/Homepage';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import SearchResult from './pages/SearchResult';
import { Provider } from 'react-redux';
import store from './store/store';
import NotFound from './components/NotFound';

// il provider rende disponibile lo store Redux a tutti i componenti annidati a cui servirà l'accesso
// con le Route imposto il path a cui andare per raggiungere il componente indicato con la proprietà element
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