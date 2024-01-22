import { Spinner } from 'react-bootstrap';

export const SpinnerLoad = () => {
  return (
    <>
      <Spinner animation='border' variant='primary' role='status'>
        <span className='visually-hidden'>Your movies are loading...</span>
      </Spinner>
    </>
  );
};
