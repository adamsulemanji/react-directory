import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tiles from './Tiles';
import Contact from './Contact';
import { Link } from 'react-router-dom';

function NavB() {
  return (
    <div className = "p-10 m-10 bg-blue-200 rounded-2xl">
      <Navbar>
        <Navbar.Brand as={Link} to="/">Sandboxing App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="hover:text-purple-700">
          <Nav className="mr-auto hover:text-purple-700">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Link to="/tiles" className="nav-link">Tiles</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavB;
