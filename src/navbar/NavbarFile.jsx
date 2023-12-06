import "../styles/App.css";
import Logo from "./Logo";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useState } from "react";

function NavbarFile() {
  const [instagramSrc, setInstagramSrc] = useState(
    "../img/icons/instagram.png"
  );
  const [facebookSrc, setFacebookSrc] = useState("../img/icons/facebook.png");
  const [bandcampSrc, setBandcampSrc] = useState("../img/icons/bandcamp.png");
  const [emailSrc, setEmailSrc] = useState("../img/icons/email.png");

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
                      onMouseOver={() => {
                        setInstagramSrc("../img/icons/instagram-hover.png");
                      }}
                      onMouseLeave={() => {
                        setInstagramSrc("../img/icons/instagram.png");
                      }}
                      className="navLogoDD"
                      src={instagramSrc}
                    ></img>
                  </a>
                  <a href="http://www.facebook.com/pqjonez" target="_blank">
                    <img
                      onMouseOver={() => {
                        setFacebookSrc("../img/icons/facebook-hover.png");
                      }}
                      onMouseLeave={() => {
                        setFacebookSrc("../img/icons/facebook.png");
                      }}
                      className="navLogoDD"
                      src={facebookSrc}
                    ></img>
                  </a>
                  <a href="http://www.pqjonez.bandcamp.com" target="_blank">
                    <img
                      onMouseOver={() => {
                        setBandcampSrc("../img/icons/bandcamp-hover.png");
                      }}
                      onMouseLeave={() => {
                        setBandcampSrc("../img/icons/bandcamp.png");
                      }}
                      className="navLogoDD"
                      src={bandcampSrc}
                    ></img>
                  </a>
                  <img
                    onMouseOver={() => {
                      setEmailSrc("../img/icons/email-hover.png");
                    }}
                    onMouseLeave={() => {
                      setEmailSrc("../img/icons/email.png");
                    }}
                    className="navLogoDD "
                    src={emailSrc}
                  ></img>
                </div>
              </Nav>
            </Navbar.Collapse>
            <div className="sticky-top navInvRight" href="#">
              <a href="http://www.instagram.com/pqjonez" target="_blank">
                <img
                  onMouseOver={() => {
                    setInstagramSrc("../img/icons/instagram-hover.png");
                  }}
                  onMouseLeave={() => {
                    setInstagramSrc("../img/icons/instagram.png");
                  }}
                  className="navLogo"
                  src={instagramSrc}
                ></img>
              </a>
              <a href="http://www.facebook.com/pqjonez" target="_blank">
                <img
                  onMouseOver={() => {
                    setFacebookSrc("../img/icons/facebook-hover.png");
                  }}
                  onMouseLeave={() => {
                    setFacebookSrc("../img/icons/facebook.png");
                  }}
                  className="navLogo"
                  src={facebookSrc}
                ></img>
              </a>
              <a href="http://www.pqjonez.bandcamp.com" target="_blank">
                <img
                  onMouseOver={() => {
                    setBandcampSrc("../img/icons/bandcamp-hover.png");
                  }}
                  onMouseLeave={() => {
                    setBandcampSrc("../img/icons/bandcamp.png");
                  }}
                  className="navLogo"
                  src={bandcampSrc}
                ></img>
              </a>
              <a
                href="http://www.google.com"
                className="email2Delete"
                target="_blank"
              >
                <img
                  onMouseOver={() => {
                    setEmailSrc("../img/icons/email-hover.png");
                  }}
                  onMouseLeave={() => {
                    setEmailSrc("../img/icons/email.png");
                  }}
                  className="navLogo "
                  src={emailSrc}
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
