import { Container } from 'react-bootstrap';

const Footer = () => {
  //{new Date().getFullYear()} takes the current year to have it dynamically updated
  return (
    <>
      <Container fluid className='text-center position-fixed bottom-0 py-3'>
        <p className='m-0'>
          Copyright DreamJob &copy; {new Date().getFullYear()} | All rights
          reserved{' '}
        </p>
      </Container>
    </>
  );
};

export default Footer;
