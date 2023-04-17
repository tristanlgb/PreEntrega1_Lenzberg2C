import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <Navbar bg="primary" expand="lg">
    
    <Container fluid>
      <Navbar.Brand href="#">Tienda de Adopcion de Pokemons💗</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="/#">Inicio🏚️</Nav.Link>
          <Nav.Link href="/#">Mi pokemon🐱</Nav.Link>
          <Nav.Link href="#" disabled>
            
          </Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="Pokemon"
            placeholder="Pokemon"
            className="me-2"
            aria-label="Pokemon"
          />
          <Button variant="outline-success">🔍</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
    <CartWidget icon="src=/media/carticon.png"/>
  </Navbar>
  );
};

export default NavBar;