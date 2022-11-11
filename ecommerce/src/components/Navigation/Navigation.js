import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

export const Navigation = () => {

    const [theme, setTheme] = useState(true)

    return (
        <Navbar bg="primary" variant="dark" className='mb-3'>
            <Container>
                <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
                <Nav className="ml-auto">
                    <Link className='nav-link' to="/">Home</Link>
                    <Link className='nav-link' to="/producto">Producto</Link>
                    <Link className='nav-link' to="/catalogo">Catalogo</Link>
                    <Link className='nav-link' to="/aboutus">About Us</Link>
                    <div className='nav-link' style={{width: '15px', height: '15px'}} onClick={() => setTheme(!theme)}>
                        {
                            theme ?
                                <FontAwesomeIcon icon={faSun} />
                                :
                                <FontAwesomeIcon icon={faMoon} />
                        }
                    </div>
                </Nav>
            </Container>
        </Navbar>
    )
}
