import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/images/logo.png";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    // <div className="navbar navbar-expand-md navbar-dark cyborg-navbar">
    //   <div className="container">
    //     <Link to="/" className="navbar-brand">
    //       <img src={logo} alt="Cyborg Logo" />
    //     </Link>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#mainmenu"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>

    //     <div className="collapse navbar-collapse" id="mainmenu">
    //       <ul className="navbar-nav ms-auto">
    //         <NavItems>
    //           <NavLink to="/" className="nav-link">
    //             Home
    //           </NavLink>
    //         </NavItems>
    //         <NavItems>
    //           <NavLink to="/browse" className="nav-link">
    //             Browse
    //           </NavLink>
    //         </NavItems>

    //         <NavItems>
    //           <NavLink to="/details" className="nav-link">
    //             Details
    //           </NavLink>
    //         </NavItems>

    //         <NavItems>
    //           <NavLink to="/streams" className="nav-link">
    //             Stream
    //           </NavLink>
    //         </NavItems>
    //         <NavItems>
    //           <NavLink to="/profile" className="nav-link">
    //             Profile
    //           </NavLink>
    //         </NavItems>
    //       </ul>
    //     </div>
    //   </div>
    // </div>

    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      className="navbar-dark cyborg-navbar"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" href="#home" className="navbar-brand">
          <img src={logo} alt="Cyborg Logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link as={NavLink} to="/" href="#deets" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/browse"
              href="#memes"
              className="nav-link"
            >
              Browse
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/details"
              href="#memes"
              className="nav-link"
            >
              Details
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/streams"
              href="#memes"
              className="nav-link"
            >
              Stream
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/profile"
              href="#memes"
              className="nav-link"
            >
              Profile
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
