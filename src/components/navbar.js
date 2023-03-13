import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../App.css';
import {
  Nav, Navbar, Container, Offcanvas,
} from 'react-bootstrap';
import logo from '../asset/planet.png';

function NavBar() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleOffcanvasClose = () => setShowOffcanvas(false);
  const handleOffcanvasToggle = () => setShowOffcanvas((prev) => !prev);
  return (
    <div>
      <Navbar bg="light" expand="lg" className="mb-3">
        <Container fluid>
          <Navbar.Brand href="#">
            <img alt="planet log" src={logo} width={45} height={45} />
            {'  '}
            Space Traveler&#39;s Hub
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            onClick={handleOffcanvasToggle}
          />
          <Navbar.Offcanvas
            show={showOffcanvas}
            onHide={handleOffcanvasClose}
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Space Traveler&#39;s Hub
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink
                  className="nav-link"
                  to="/"
                  as={Link}
                  onClick={handleOffcanvasClose}
                >
                  Rockets
                </NavLink>
                <NavLink
                  className="nav-link"
                  to="/missions"
                  as={Link}
                  onClick={handleOffcanvasClose}
                >
                  Missions
                </NavLink>
                <div className="d-none d-md-none d-lg-block mt-3 mb-3 vr" />
                <NavLink
                  className="nav-link"
                  to="/profile"
                  as={Link}
                  onClick={handleOffcanvasClose}
                >
                  My Profile
                </NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
