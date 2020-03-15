import React, { Fragment } from 'react'
import './TopNavBar.scss'
import { Nav, Navbar } from 'react-bootstrap'

const TopNavBar = () => {
    return (
        <Fragment>
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top" >
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Fragment>

    )
}


export default TopNavBar
