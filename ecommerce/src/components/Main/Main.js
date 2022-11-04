import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import { AboutUs } from '../AboutUs/AboutUs'
import { Catalogo } from '../Catalogo/Catalogo'
import { Home } from '../Home/Home'
import { Navigation } from '../Navigation/Navigation'
import { NuevoProducto } from '../NuevoProducto/NuevoProducto'
import { productos as data } from '../../shared/productos'

export const Main = () => {

  const [productos, setProductos] = useState(data)

  return (
    <>
      <Navigation />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/producto" element={<NuevoProducto setProductos={setProductos} productos={productos} />} />
          <Route path="/catalogo" element={<Catalogo productos={productos} />} />
          <Route path="aboutus" element={<AboutUs />} />
        </Routes>
      </Container>
    </>
  )
}
