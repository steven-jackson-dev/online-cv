import React, { Fragment, useEffect, useState } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './TopNavBar.scss'

const TopNavBar = () => {


  const [width, setwidth] = useState(undefined);

  const handleResize = () => setwidth(window.innerWidth);


  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize)

  }, [])

  return (
    <Fragment>
      <Navbar collapseOnSelect expand="lg" variant="dark" fixed={width <= 500 ? 'bottom' : 'top'}>
        <Navbar.Brand><Link to='/'>Steven Jackson</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Link to='/' className="nav-link">Home</Link>
            <Link to='/about' className="nav-link">About</Link>
            <Link to='/experience' className="nav-link">Experience</Link>
            <Link to='/skills' className="nav-link">Skills</Link>
            <Link to='/portfolio' className="nav-link">Portfolio</Link>
            <Link to='/projects' className="nav-link">Projects</Link>
            {/* <Link to='/contact' className="nav-link">Contact</Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>

  )
}


export default TopNavBar
