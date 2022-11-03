import React from 'react'
import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import { AboutUs } from '../AboutUs/AboutUs'
import { Catalogo } from '../Catalogo/Catalogo'
import { Home } from '../Home/Home'
import { Navigation } from '../Navigation/Navigation'
import { Producto } from '../Producto/Producto'

export const Main = () => {
  return (
    <>
      <Navigation />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/producto" element={<Producto />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="aboutus" element={<AboutUs />} />
        </Routes>
      </Container>
    </>
  )
}
