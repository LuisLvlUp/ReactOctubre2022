import React from 'react'
import Button from '@mui/material/Button';
import './Contador.css'
import { condicional } from '../../shared/condicional';
import { getColor } from '../../shared/getColor';

export const Contador = ({ contador, setContador }) => {

  const decrementar = () => {
    setContador(contador - 1)
  }

  const incrementar = () => {
    setContador(contador + 1)
  }

  return (
    <div className='contador-container'>
      <Button variant="outlined" color="error" sx={{ fontSize: '18px' }}
        onClick={decrementar}  >
        -
      </Button>
      <span style={  { fontSize: '28px', color: getColor(contador) }}> {contador} </span>
      {/* {
        <span style={
          condicional(contador) === 0 ? { fontSize: '28px', color: 'black' }
            : condicional(contador) === 1 ? { fontSize: '28px', color: 'blue' }
              : { fontSize: '28px', color: 'red' }}>
          {contador}
        </span>
      } */}
      {/* {
        condicional(contador) === 0 ?
        <span style={  { fontSize: '28px', color: 'black' }}> {contador} </span>
        :
        condicional(contador) === 1 ?
        <span style={  { fontSize: '28px', color: 'blue'  }}> {contador} </span>
        :
        <span style={  { fontSize: '28px', color: 'red'  }}> {contador} </span>
      } */}

      <Button variant="outlined" color="success" sx={{ fontSize: '18px' }}
        onClick={incrementar}>
        +
      </Button>
    </div>
  )
}
