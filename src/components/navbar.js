import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../App.css';
import {
  Nav, Navbar, Container, Offcanvas,
} from 'react-bootstrap';
import logo from '../asset/planet.png';
import { IoSettingsOutline } from 'react-icons/fa';
import { BiMicrophone } from 'react-icons/fa';




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
            WEATHER
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
                Weather
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
                   <span className="profile">
      <BiMicrophone style={{
        color: '#0290FF',
        height: '15px',
        cursor: 'pointer',
        transition: 'all ease-in 300ms',
      }}
      />
    </span>
                </NavLink>
                <NavLink
                  className="nav-link"
                  to="/missions"
                  as={Link}
                  onClick={handleOffcanvasClose}
                >
                   <span className="profile">
      <IoSettingsOutline style={{
        color: '#0290FF',
        height: '15px',
        cursor: 'pointer',
        transition: 'all ease-in 300ms',
      }}
      />
    </span>
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
