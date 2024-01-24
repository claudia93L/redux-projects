import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <Navbar expand='lg'>
      <Container>
        <Navbar.Brand>
          <Link to='/'>DreamJob</Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
