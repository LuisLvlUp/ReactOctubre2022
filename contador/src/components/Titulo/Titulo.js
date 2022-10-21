import { Alert, AlertTitle } from '@mui/material'
import React from 'react'

export const Titulo = ( {contador} ) => {
  return (
    <Alert severity="success">
      <AlertTitle>Contador</AlertTitle>
      El contador actual es: <strong> {contador} </strong>
    </Alert>
  )
}
