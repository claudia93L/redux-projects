import { Spinner } from 'react-bootstrap';

export const SpinnerLoad = () => {
  return (
    <>
      <Spinner animation='border' variant='success' role='status'>
        <span className='visually-hidden'>The jobs' list is loading...</span>
      </Spinner>
    </>
  );
};
