export const SET_JOBS = 'SET_JOBS';

export const setJobs = (newJob) => {
  return {
    type: SET_JOBS,
    payload: newJob,
  };
};
