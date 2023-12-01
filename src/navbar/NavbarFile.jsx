import "../styles/App.css";
import Logo from "./Logo";
import { Container, Nav, Navbar} from "react-bootstrap";

function NavbarFile() {
  return (
    <Navbar collapseOnSelect expand="sm">
      <Container fluid>
        <Navbar.Brand className="navLogo" href="#">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="navbarScroll responsive-navbar-nav">
          <Nav variant="tabs" className="middleNav navbar-collapse justify-content-center me-auto">
            <Nav.Link href="#action1">music</Nav.Link>
            <Nav.Link href="#action2">production</Nav.Link>
            <Nav.Link href="#action3">audio</Nav.Link>
            <Nav.Link href="#action4">about</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand
          className="sticky-top navInvRight"
          href="#"
        ></Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavbarFile;