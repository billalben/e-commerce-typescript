import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import HeaderLeftBar from "./HeaderLeftBar/HeaderLeftBar";
import styles from "./styles.module.css";
import LogoIcon from "@assets/svg/logo.svg?react";
const { headerContainer, headerLogo } = styles;

const Header = () => {
  return (
    <header>
      <div className={`${headerContainer} container`}>
        <Link to="/" className={headerLogo}>
          <LogoIcon title="logo" />
          <h2>Shop</h2>
        </Link>

        <HeaderLeftBar />
      </div>

      <Navbar
        expand="sm"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="categories">
                Categories
              </Nav.Link>
              <Nav.Link as={NavLink} to="about-us">
                About
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={NavLink} to="login">
                Login
              </Nav.Link>
              <Nav.Link as={NavLink} to="register">
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
