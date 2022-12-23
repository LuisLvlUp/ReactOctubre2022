import React, { useEffect, useState } from 'react'
import './Cine.css'

export const Cine = () => {

    let filas = [...Array(5)]
    let columnas = [...Array(10)]

    const [seleccionados, setSeleccionados] = useState([])
    const [bloqueados, setBloqueados] = useState([])

    useEffect(() => {
        console.log('Bloqueados')
        console.log(bloqueados)
    }, [bloqueados])


    const seleccionarButaca = (index1, index2) => {
        let butaca = `${index1}${index2}`

        let bloqueado = bloqueados.filter( (select) => select === `${index1}${index2}` )

        if(!bloqueado.length > 0){
            let seleccionado = seleccionados.filter( (select) => select === butaca )
            if(seleccionado.length > 0){
                setSeleccionados( seleccionados.filter((select) => select !== butaca )  )
            }else{
                setSeleccionados( [...seleccionados, butaca] )
            }
        }
    }

    const getEstilo = (index1, index2) => {
        let seleccionado = seleccionados.filter( (select) => select === `${index1}${index2}` )
        let bloqueado = bloqueados.filter( (select) => select === `${index1}${index2}` )
        if(bloqueado.length > 0){
            return { backgroundColor: 'red' }
        }
        else if(seleccionado.length > 0){
            return { backgroundColor: 'lightgreen' }
        } 
        return {}
    }

    const reservar = () => {
        setBloqueados( [...bloqueados, seleccionados] )
        setSeleccionados([])
        // alert(`Reservados: ${seleccionados}`)
    }


    return (
        <div className='mt-5'>
            {
                filas.map((y, index1) => (
                    <div className='row gap-3' key={index1}>
                        {
                            columnas.map((x, index2) => (
                                <div key={index2} className={`butaca col-1 mb-3 text-center}`}
                                onClick={() => seleccionarButaca(index1, index2)}
                                style={getEstilo(index1, index2)}>
                                    [ { index1 } , { index2 } ]
                                </div>
                            ))
                        }
                    </div>
                )
                )
            }
            <button className='btn bg-info' onClick={reservar}> 
                Reservar
            </button>

        </div>
    )
}
