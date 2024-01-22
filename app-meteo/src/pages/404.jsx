import { Card, Container } from 'react-bootstrap';

const ErrorPage = () => {
  return (
    <>
      <Container
        fluid
        className='d-flex align-items-center justify-content-center'
      >
        <Card className='text-center border border-3 border-solid rounded-3 w-50 p-5'>
          <Card.Img
            src='../src/assets/404-cloud.webp'
            className='w-50 align-self-center'
          ></Card.Img>
          <Card.Title className='display-1 my-4'>Oh no!</Card.Title>
          <Card.Body className='w-75 align-self-center'>
            <Card.Text className='h5'>
              Mi spiace, la pagina che hai cercato non esiste. Sarai
              reindirizzato alla home a momenti
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default ErrorPage;
