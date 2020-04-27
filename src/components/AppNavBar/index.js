import React, { useState, useEffect } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import AppRoutes from 'global/AppRoutes.module'
import { Link } from 'react-router-dom';
import './TopNavBar.scss'

const AppNavBar = (props) => {

    const [width, setwidth] = useState(undefined);
    const handleResize = () => setwidth(window.innerWidth);

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize)

    }, [])


    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" fixed={width <= 500 ? 'bottom' : 'top'}>
            <Navbar.Brand><Link to='/'>Steven Jackson</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                {AppRoutes.map(route => {
                    return <Nav.Item key={route.id} href="#home">
                        <Link to={route.path} style={{ textDecoration: 'none', color: 'white', padding: '1em' }}>{route.name}</Link>
                    </Nav.Item >
                })}
            </Nav>
            </Navbar.Collapse>
        </Navbar>

    );
}

export default AppNavBar
