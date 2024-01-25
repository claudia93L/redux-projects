import { createSlice } from '@reduxjs/toolkit';

const jobsSlice = createSlice({
  name: 'jobs',
  initialState: {
    jobs: [],
    companyJobs: [],
  },
  reducers: {
    setJobs: (state, action) => {
      state.jobs = action.payload;
    },
    setCompanyJobs: (state, action) => {
      state.companyJobs = action.payload;
    },
  },
});

export const { setJobs, setCompanyJobs } = jobsSlice.actions;

export default jobsSlice.reducer;
