import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import { AboutUs } from '../AboutUs/AboutUs'
import { Catalogo } from '../Catalogo/Catalogo'
import { Home } from '../Home/Home'
import { Navigation } from '../Navigation/Navigation'
import { NuevoProducto } from '../NuevoProducto/NuevoProducto'
import { productos as data } from '../../shared/productos'
import { TodoList } from '../TodoList/TodoList'
import { APIURL } from '../../shared/API'
import { Cine } from '../Cine/Cine'

export const Main = () => {

  const [productos, setProductos] = useState([])

  useEffect(() => {
    fetch(`${APIURL}/products`)
    .then(response => response.json())
    .then(data => setProductos(data))
  }, [])
  

  return (
    <>
      <Navigation />
      <Container>
        <Routes>
          <Route path="/" element={<Home setProductos={setProductos} productos={productos} />} />
          <Route path="/producto" element={<NuevoProducto setProductos={setProductos} productos={productos} />} />
          <Route path="/catalogo" element={<Catalogo productos={productos} />} />
          <Route path="/todo-list" element={<TodoList />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="cine" element={<Cine />} />
        </Routes>
      </Container>
    </>
  )
}
