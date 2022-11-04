import React from 'react'
import { Button, Card } from 'react-bootstrap'

export const Catalogo = ( { productos } ) => {
    return (
        <div className='d-flex gap-3 flex-wrap justify-content-center'>
            {
                productos.map((producto) => (
                    <Card style={{ width: '15rem' }} key={producto.id}>
                        <Card.Img variant="top" src={producto.img} />
                        <Card.Body>
                            <Card.Title>{producto.nombre}</Card.Title>
                            <Card.Text>
                                {producto.descripcion}
                            </Card.Text>
                            <Button variant="success">Comprar</Button>
                        </Card.Body>
                    </Card>
                ))
            }

        </div>

    )
}
