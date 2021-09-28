import React from 'react'
import {Navbar, Nav, NavbarBrand} from 'react-bootstrap'
import Search from '../Search/Search'
import LogoutButton from '../LogoutButton/LogoutButton'
import './heronavbar.css'

const HeroNavbar = ({ handleSearch, setUser}) => {
    return (
        <Navbar fixed="top" bg="danger nav-color" variant="dark" expand="lg" className='nav-color'>
          <NavbarBrand href="/about">SuperHero App</NavbarBrand> 
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/home">Equipo</Nav.Link>
              <Nav.Link href="/about">Link</Nav.Link>
            </Nav>
            <LogoutButton setUser={setUser}/>
            <Search handleSearch={handleSearch}/>
          </Navbar.Collapse>
        </Navbar>
    )
}

export default HeroNavbar
