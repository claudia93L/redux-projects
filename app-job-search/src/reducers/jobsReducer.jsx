import { SET_JOBS, SET_COMPANY_JOBS } from '../actions/jobsActions';

const initialState = {
  jobs: [],
  companyJobs: [],
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOBS:
      return {
        ...state,
        jobs: action.payload,
      };

    case SET_COMPANY_JOBS:
      return {
        ...state,
        companyJobs: action.payload,
      };
    default:
      return state;
  }
};

export default jobsReducer;
