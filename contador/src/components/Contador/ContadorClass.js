import { Button } from '@mui/material'
import React, { Component } from 'react'
import { getColor } from '../../shared/getColor'
import './Contador.css'

class ContadorClass extends Component {

    constructor(props) {
        super(props)

        this.decrementar = this.decrementar.bind(this)
        this.incrementar = this.incrementar.bind(this)
    }

    decrementar = () => {
        this.props.setContador(this.props.contador - 1)
    }

    incrementar = () => {
        this.props.setContador(this.props.contador + 1)
    }

    render() {
        return (
            <div className='contador-container'>
                <Button variant="outlined" color="error" sx={{ fontSize: '18px' }}
                    onClick={this.decrementar}  >
                    -
                </Button>
                <span style={{ fontSize: '28px', color: getColor(this.props.contador) }}> {this.props.contador} </span>
                <Button variant="outlined" color="success" sx={{ fontSize: '18px' }}
                    onClick={this.incrementar}>
                    +
                </Button>
            </div>
        )
    }
}

export default ContadorClass