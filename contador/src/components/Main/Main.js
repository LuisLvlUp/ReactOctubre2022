import React, { useEffect, useState } from 'react'
import { Contador } from '../Contador/Contador';
import { Titulo } from '../Titulo/Titulo';
import './Main.css'

const Main = () => {

    const [contador, setContador] = useState(0)

    useEffect(() => {
        console.log(contador)
    }, [contador])


    return (
        <div className='main-container'>
            <Titulo contador={contador} />
            <Contador contador={contador} setContador={setContador} />
        </div>
    )
}

export default Main;
