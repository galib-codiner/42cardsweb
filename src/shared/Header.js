import React from 'react'
import '../styles/shared/Header.css'
import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import logo from '../assests/logo.png'

const Header = () => {
  return (
    <>
      <Navbar className='header' collapseOnSelect expand="lg" fixed='top'>
        <Container>
        <Navbar.Brand>
          <Link to="/">
            <Image src={logo} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/services">Services</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about">About Us</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contact">Contact Us</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header