import React, { Fragment } from 'react'
import { Nav, Navbar} from 'react-bootstrap'
import {Link } from 'react-router-dom'
import './TopNavBar.scss'

const TopNavBar = () => {
    return (
        <Fragment>
          <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top">
  <Navbar.Brand href="#home">Steven Jackson</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Link to='/' className="nav-link">Home</Link>
      <Link to='/about' className="nav-link">About</Link>
      <Link to='/experience' className="nav-link">Experience</Link>
      <Link to='/portfolio' className="nav-link">Portfolio</Link>
      <Link to='/projects' className="nav-link">Projects</Link>
      <Link to='/contact' className="nav-link">Contact</Link>
    </Nav>
  </Navbar.Collapse>
  </Navbar>
        </Fragment>

    )
}


export default TopNavBar
