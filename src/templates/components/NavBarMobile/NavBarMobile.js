import React, { Fragment } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import './NavBar.scss'

const NavBarMobile = () => {
    return (
        <Fragment>
            <Navbar className="NavBar" collapseOnSelect expand="lg" bg="secondary" variant="dark">
                <Navbar.Brand href="#home">Steven Jackson</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto text-center">
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </Fragment>
    )
}


export default NavBarMobile
