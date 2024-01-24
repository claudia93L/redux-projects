import { Spinner } from 'react-bootstrap';

export const SpinnerLoad = () => {
  return (
    <>
      <Spinner animation='border' variant='primary' role='status'>
        <span className='visually-hidden'>The weather data is loading...</span>
      </Spinner>
    </>
  );
};
