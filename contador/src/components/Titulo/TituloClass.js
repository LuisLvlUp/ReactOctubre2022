import { Alert, AlertTitle } from '@mui/material'
import React, { Component } from 'react'

export default class TituloClass extends Component {

    render() {
        return (
            <Alert severity="success">
                <AlertTitle>Contador</AlertTitle>
                El contador actual es: <strong> {this.props.contador} </strong>
            </Alert>
        )
    }
}
