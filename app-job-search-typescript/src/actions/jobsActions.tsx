export const SET_JOBS = 'SET_JOBS';
export const SET_COMPANY_JOBS = 'SET_COMPANY_JOBS';

// the payload type can be either a string or an array of strings
type JobsActionsReturn = {
  type: string;
  payload: string | string[];
};

export const setJobs = (newJob: string): JobsActionsReturn => {
  return {
    type: SET_JOBS,
    payload: newJob,
  };
};

export const setCompanyJobs = (jobsList: string[]) => {
  return {
    type: SET_COMPANY_JOBS,
    payload: jobsList,
  };
};
