import "../styles/App.css";
import Logo from "./Logo";
import { Container, Nav, Navbar } from "react-bootstrap";

import {
  instaDark,
  instaLight,
  facebookDark,
  facebookLight,
  bandcampDark,
  bandcampLight,
  emailDark,
  emailLight,
} from "../data/nav-data.js";

function NavbarFile() {
  return (
    <main>
      <nav className="navFile">
        <Navbar collapseOnSelect expand="md">
          <Container fluid>
            <Navbar.Brand className="navLogo" href="music">
              <Logo />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="navbarScroll responsive-navbar-nav">
              <Nav className="middleNav navbar-collapse justify-content-center me-auto">
                <Nav.Link href="music">music</Nav.Link>
                <Nav.Link href="production">production</Nav.Link>
                <Nav.Link href="audio">audio</Nav.Link>
                <Nav.Link href="about">about</Nav.Link>
                <div className="burgerSocials">
                  <a href="http://www.instagram.com/pqjonez" target="_blank">
                    <img
                      onMouseOver={(e) => (e.currentTarget.src = instaDark)}
                      onMouseOut={(e) => (e.currentTarget.src = instaLight)}
                      className="navLogoDD"
                      src={instaLight}
                    ></img>
                  </a>
                  <a href="http://www.facebook.com/pqjonez" target="_blank">
                    <img
                      onMouseOver={(e) => (e.currentTarget.src = facebookDark)}
                      onMouseOut={(e) => (e.currentTarget.src = facebookLight)}
                      className="navLogoDD"
                      src={facebookLight}
                    ></img>
                  </a>
                  <a href="http://www.pqjonez.bandcamp.com" target="_blank">
                    <img
                      onMouseOver={(e) => (e.currentTarget.src = bandcampDark)}
                      onMouseOut={(e) => (e.currentTarget.src = bandcampLight)}
                      className="navLogoDD"
                      src={bandcampLight}
                    ></img>
                  </a>
                  <a href="mailto:peter.jones.sound@gmail.com?subject = Feedback&body = Message">
                    <img
                      onMouseOver={(e) => (e.currentTarget.src = emailDark)}
                      onMouseOut={(e) => (e.currentTarget.src = emailLight)}
                      className="navLogoDD"
                      src={emailLight}
                    ></img>
                  </a>
                </div>
              </Nav>
            </Navbar.Collapse>
            <div className="sticky-top navInvRight" href="#">
              <a href="http://www.instagram.com/pqjonez" target="_blank">
                <img
                  onMouseOver={(e) => (e.currentTarget.src = instaDark)}
                  onMouseOut={(e) => (e.currentTarget.src = instaLight)}
                  className="navLogo"
                  src={instaLight}
                ></img>
              </a>
              <a href="http://www.facebook.com/pqjonez" target="_blank">
                <img
                  onMouseOver={(e) => (e.currentTarget.src = facebookDark)}
                  onMouseOut={(e) => (e.currentTarget.src = facebookLight)}
                  className="navLogo"
                  src={facebookLight}
                ></img>
              </a>
              <a href="http://www.pqjonez.bandcamp.com" target="_blank">
                <img
                  onMouseOver={(e) => (e.currentTarget.src = bandcampDark)}
                  onMouseOut={(e) => (e.currentTarget.src = bandcampLight)}
                  className="navLogo"
                  src={bandcampLight}
                ></img>
              </a>
              <a href="mailto:peter.jones.sound@gmail.com?subject = Feedback&body = Message">
                <img
                  onMouseOver={(e) => (e.currentTarget.src = emailDark)}
                  onMouseOut={(e) => (e.currentTarget.src = emailLight)}
                  className="navLogo email2Delete"
                  src={emailLight}
                ></img>
              </a>
            </div>
          </Container>
        </Navbar>
      </nav>
      <div className="navGap"></div>
    </main>
  );
}

export default NavbarFile;
