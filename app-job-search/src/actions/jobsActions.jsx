export const SET_JOBS = 'SET_JOBS';
export const SET_COMPANY_JOBS = 'SET_COMPANY_JOBS';

export const setJobs = (newJob) => {
  return {
    type: SET_JOBS,
    payload: newJob,
  };
};

export const setCompanyJobs = (jobsList) => {
  return {
    type: SET_COMPANY_JOBS,
    payload: jobsList,
  };
};
