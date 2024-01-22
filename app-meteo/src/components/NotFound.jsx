import ErrorPage from '../pages/404';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// named export because otherwise the import in CardComponent was giving me issues with the default one
export const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // setting a timeout that, after 5 secs, will redirect the user to homepage
    setTimeout(() => {
      navigate('/');
    }, 5000);
  }, []);

  return (
    <>
      <ErrorPage></ErrorPage>
    </>
  );
};
