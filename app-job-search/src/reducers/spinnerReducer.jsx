import { createSlice } from '@reduxjs/toolkit';

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
