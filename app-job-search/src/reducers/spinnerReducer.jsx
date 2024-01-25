import { createSlice } from '@reduxjs/toolkit';

// ho convertito tutti i reducers nella nuova sintassi redux toolkit, che grazie al metodo createSlice permette di inizializzare lo stato, definire i reducers e le actions tutte nello stesso componente reducer

const spinnerSlice = createSlice({
  name: 'spinner',
  initialState: {
    stateSpinner: false,
  },
  reducers: {
    setSpinner: (state, action) => {
      state.stateSpinner = action.payload;
    },
  },
});

export const { setSpinner } = spinnerSlice.actions;

export default spinnerSlice.reducer;
