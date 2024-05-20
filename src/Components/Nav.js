import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
function NavBarComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="home">Inicio </Navbar.Brand>
      <Navbar.Brand href="contact">Contacto </Navbar.Brand>
      <Navbar.Brand href="about">Acerca de </Navbar.Brand>
      <Navbar.Brand href="claim">Reseña de Usuario </Navbar.Brand>
      <Navbar.Brand href="user">Registrar Usuario </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    </Container>
  </Navbar>
  );
}

export default NavBarComponent;
