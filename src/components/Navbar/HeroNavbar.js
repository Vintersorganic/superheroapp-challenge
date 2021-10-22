import React from 'react'
import { Navbar, Nav, NavbarBrand } from 'react-bootstrap'
import Search from '../Search/Search'
import LogoutButton from '../LogoutButton/LogoutButton'
import { LinkContainer } from 'react-router-bootstrap'
import './heronavbar.css'

const HeroNavbar = () => {

  return (
    <Navbar fixed="top" bg="danger nav-color" variant="dark" expand="lg" className='nav-color'>
      <LinkContainer to='/home'>
        <NavbarBrand>Superhero App</NavbarBrand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <LinkContainer to="/home">
            <Nav.Link>Equipo</Nav.Link>
          </LinkContainer>
          <Search />
        </Nav>

        <LogoutButton />

      </Navbar.Collapse>
    </Navbar>
  )
}

export default HeroNavbar
