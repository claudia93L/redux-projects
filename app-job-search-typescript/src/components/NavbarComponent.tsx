import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <Navbar expand='lg' className='mx-5'>
      <Container>
        <Navbar.Brand className='fw-bolder bg-danger py-2 px-3 rounded-5'>
          <Link to='/'>DreamJob</Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
