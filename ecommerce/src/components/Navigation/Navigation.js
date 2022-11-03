import React from 'react'
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Navigation = () => {
    return (
        <Navbar bg="primary" variant="dark" className='mb-3'>
            <Container>
                <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link>
                        <Link style={{ padding: 0 }} className='nav-link' to="/">Home</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link style={{ padding: 0 }} className='nav-link' to="/producto">Producto</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link style={{ padding: 0 }} className='nav-link' to="/catalogo">Catalogo</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link style={{ padding: 0 }} className='nav-link' to="/aboutus">About Us</Link>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
