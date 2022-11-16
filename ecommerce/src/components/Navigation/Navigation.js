import React, { useContext, useEffect } from 'react'
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { ThemeContext } from '../../context/themeContext';

export const Navigation = () => {

    const [theme, setTheme] = useContext(ThemeContext)

    useEffect(() => {
      console.log(theme)
      document.body.style = `background-color: ${theme.state ? theme.dark.body : theme.light.body}`
    }, [theme])

    const toggleTheme = () => {
        setTheme({ ...theme, state: !theme.state })
    }    

    return (
        <Navbar bg={ theme.state ? theme.dark.nav : theme.light.nav } variant="dark" className='mb-3'>
            <Container>
                <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
                <Nav className="ml-auto">
                    <Link className='nav-link' to="/">Home</Link>
                    <Link className='nav-link' to="/producto">Producto</Link>
                    <Link className='nav-link' to="/catalogo">Catalogo</Link>
                    <Link className='nav-link' to="/aboutus">About Us</Link>
                    <div className='nav-link' style={{width: '15px', height: '15px'}} onClick={toggleTheme}>
                        {
                            theme.state ?
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
