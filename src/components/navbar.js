import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../App.css';
import {
  Nav, Navbar, Container, Offcanvas,
} from 'react-bootstrap';
import { BsGear, BsMic } from 'react-icons/bs';

import logo from '../asset/planet.png';

function NavBar() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleOffcanvasClose = () => setShowOffcanvas(false);
  const handleOffcanvasToggle = () => setShowOffcanvas((prev) => !prev);
  return (
    <div>
      <Navbar bg="light" expand="lg" className="mb-3">
        <Container fluid>
          <Navbar.Brand href="#" style={{ color: '#0290FF', paddingLeft: '12px' }}>
            <img alt="planet log" src={logo} width={45} height={45} style={{ paddingRight: '12px' }} />
            {' '}
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
              <Nav className="justify-content-end flex-grow-1 pe-5">
                <NavLink
                  className="nav-link"
                  to="/"
                  as={Link}
                  onClick={handleOffcanvasClose}
                >
                  <span className="profile">
                    <BsMic style={{
                      color: '#0290FF',
                      height: '30px',
                      width: '30px',
                      cursor: 'pointer',
                      transition: 'all ease-in 300ms',
                    }}
                    />
                  </span>
                </NavLink>
                <NavLink
                  className="nav-link"
                  to="/"
                  as={Link}
                  onClick={handleOffcanvasClose}
                >
                  <span className="profile">
                    <BsGear style={{
                      color: '#0290FF',
                      width: '30px',
                      height: '30px',
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
