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
                    <Link className='nav-link' to="/">Home</Link>
                    <Link className='nav-link' to="/producto">Producto</Link>
                    <Link className='nav-link' to="/catalogo">Catalogo</Link>
                    <Link className='nav-link' to="/aboutus">About Us</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
