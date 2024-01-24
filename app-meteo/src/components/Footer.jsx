import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <>
      <Container
        fluid
        className='bg-dark text-white py-3 text-center position-fixed bottom-0'
      >
        <p className='m-0'>
          <small>
            Copyright &copy; {new Date().getFullYear()} | IntoTheClouds Weather
            App
          </small>
        </p>
      </Container>
    </>
  );
};

export default Footer;
