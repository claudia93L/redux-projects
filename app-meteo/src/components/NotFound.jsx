import ErrorPage from '../pages/404';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// esporto con named export perchè mi dava problemi l'importazione su CardComponent con l'esportazione default
export const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // setto un timeout che, trascorsi 5 secondi, rendirizzerà l'utente alla homepage
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
