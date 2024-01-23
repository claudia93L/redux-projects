import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/rootReducer';

// con configureStore creo lo stato globale che potrò richiamare ed utilizzare da qualsiasi componente lo necessiti
const store = configureStore({
  // dichiaro un reducer che gestirà i vari reducers che utilizzerò nell'app
  reducer: rootReducer,
});

export default store;
