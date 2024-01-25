import { SET_JOBS, SET_COMPANY_JOBS } from '../actions/jobsActions';

// dichiaro i tipi di jobs e companyJobs
type List = {
  jobs: string[];
  companyJobs: string[];
};

type Action = {
  type: string;
  payload: string[];
};

const initialState: List = {
  jobs: [],
  companyJobs: [],
};

const jobsReducer = (state = initialState, action: Action): List => {
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
