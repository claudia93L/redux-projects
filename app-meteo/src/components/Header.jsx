import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Navbar expand='lg' className='navbar-light mb-5'>
        <Container>
          <Navbar.Brand className='text-center mx-auto '>
            <Link to='/' className='d-flex flex-column align-items-center'>
              <img
                src='../../src/assets/clouds-logo.png'
                alt='Cloud illustration logo'
                className='w-25'
              />
              <span style={{ fontSize: '0.5em', marginTop: '-20px' }}>
                IntoTheClouds
              </span>
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
