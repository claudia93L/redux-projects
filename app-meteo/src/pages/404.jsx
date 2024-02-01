import { Card, Container } from 'react-bootstrap';

const ErrorPage = () => {
  return (
    <>
      <Container
        fluid
        className='d-flex align-items-center justify-content-center mb-5 error-card'
      >
        <Card className='text-center border-0 w-50 py-5 px-1 bg-opacity'>
          <Card.Img
            src='../src/assets/404-cloud.webp'
            className='w-25 align-self-center'
          ></Card.Img>
          <Card.Title className='display-1 my-4'>Oh no!</Card.Title>
          <Card.Body className='w-75 align-self-center'>
            <Card.Text className='h5'>
              I'm sorry, I couldn't find what you searched for. You'll be
              redirected to the home page in a few moments.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default ErrorPage;
