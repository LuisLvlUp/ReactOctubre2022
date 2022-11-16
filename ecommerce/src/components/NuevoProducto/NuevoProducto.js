import React, { useContext, useRef } from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'
import { ThemeContext } from '../../context/themeContext'

export const NuevoProducto = ({ productos, setProductos}) => {

  const formRef = useRef(null)

  const [theme, setTheme] = useContext(ThemeContext)

  const handleSubmit = (event) => {
    event.preventDefault()
    let { precio, stock, nombre, descripcion, img } = event.target
    let id = productos[productos.length - 1].id + 1
    let producto = {
      id: id,
      precio: precio.value,
      stock: stock.value,
      nombre: nombre.value,
      descripcion: descripcion.value,
      img: img.value
    }

    setProductos( [ ...productos, producto ] )

    alert('Producto creado exitosamente.')
    formRef.current.reset()
  }

  return (
    <Container className='mt-5'>
      <Card bg={ theme.state ? theme.dark.form : theme.light.form }>
        <Card.Header as="h5">Nuevo producto</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit} ref={formRef}>
            <div className='row'>
              <div className='col-6'>
                <Form.Group className="mb-3" controlId="nombre">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" placeholder="Nombre..." />
                </Form.Group>
              </div>
              <div className='col-6'>
                <Form.Group className="mb-3" controlId="descripcion">
                  <Form.Label>Descripción</Form.Label>
                  <Form.Control type="text" placeholder="Descripcion..." />
                </Form.Group>
              </div>
              <div className='col-6'>
                <Form.Group className="mb-3" controlId="precio">
                  <Form.Label>Precio</Form.Label>
                  <Form.Control type="number" placeholder="Q." />
                </Form.Group>
              </div>
              <div className='col-6'>
                <Form.Group className="mb-3" controlId="stock">
                  <Form.Label>Stock</Form.Label>
                  <Form.Control type="number" placeholder="0" />
                </Form.Group>
              </div>
              <div className='col-6'>
                <Form.Group className="mb-3" controlId="img">
                  <Form.Label>Imagen</Form.Label>
                  <Form.Control type="text" placeholder="htpp://...." />
                </Form.Group>
              </div>
            </div>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>

  )
}
