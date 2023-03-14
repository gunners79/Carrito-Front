import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="https://www.facebook.com/AFASeleccionArgentina/?locale=es_LA" target="_black">Facebook</Nav.Link>
            <Nav.Link href="https://twitter.com/Argentina" target="_black">Twitter</Nav.Link>
            <Nav.Link href="https://www.instagram.com/afaseleccion/?hl=es" target="_black">Instagram</Nav.Link>
            <Nav.Link href="https://web.whatsapp.com/" target="_black">Whatsapp</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Footer;