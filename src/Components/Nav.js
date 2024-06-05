import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { useCart } from "../context/CartContext";
function NavBarComponent() {
  const { cart = [] } = useCart() || {}; // Manejar el caso en que cart sea undefined
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="home">Inicio </Navbar.Brand>
      <Navbar.Brand href="contact">Contacto </Navbar.Brand>
      <Navbar.Brand href="about">Acerca de </Navbar.Brand>
      <Navbar.Brand href="claim">Agregar reseña </Navbar.Brand>
      <Navbar.Brand href="user">Registrar Usuario </Navbar.Brand>
      <Navbar.Brand href="cart">Carrito</Navbar.Brand>    
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    </Container>
  </Navbar>
  );
}

export default NavBarComponent;
