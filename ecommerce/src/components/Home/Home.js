import React from 'react'
import { Catalogo } from '../Catalogo/Catalogo'
import { NuevoProducto } from '../NuevoProducto/NuevoProducto'
import { SplitPane } from '../SplitPane/SplitPane'

export const Home = ({ productos, setProductos}) => {
  return (
    <SplitPane
      left={<NuevoProducto setProductos={setProductos} productos={productos} />}
      right={<Catalogo productos={productos} />}
    />
  )
}
