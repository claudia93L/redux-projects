import ErrorPage from '../pages/404';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  /* useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 3000);
  }, []); */

  return (
    <>
      <ErrorPage></ErrorPage>
    </>
  );
};

export default NotFound;
