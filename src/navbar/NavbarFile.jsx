import "../styles/App.css";
import Logo from "./Logo";
import { Container, Nav, Navbar} from "react-bootstrap";

function NavbarFile() {
  return (
    <Navbar collapseOnSelect expand="sm">
      <Container fluid>
        <Navbar.Brand className="navLogo" href="music">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="navbarScroll responsive-navbar-nav">
          <Nav variant="tabs" className="middleNav navbar-collapse justify-content-center me-auto">
            <Nav.Link href="music">music</Nav.Link>
            <Nav.Link href="production">production</Nav.Link>
            <Nav.Link href="audio">audio</Nav.Link>
            <Nav.Link href="about">about</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand
          className="sticky-top navInvRight"
          href="#"
        ><p>Socials</p></Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavbarFile;