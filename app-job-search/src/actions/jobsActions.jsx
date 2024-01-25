export const SET_JOBS = 'SET_JOBS';
export const SET_COMPANY_JOBS = 'SET_COMPANY_JOBS';

// action that handles the setting of the value in the redux store, which will store the job data coming from the api
export const setJobs = (newJob) => {
  return {
    type: SET_JOBS,
    payload: newJob,
  };
};

// action that handles the setting of the value in the redux store, which will store the list of jobs from the selected company
export const setCompanyJobs = (jobsList) => {
  return {
    type: SET_COMPANY_JOBS,
    payload: jobsList,
  };
};
