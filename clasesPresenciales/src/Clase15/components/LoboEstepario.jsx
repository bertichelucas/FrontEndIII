import React from 'react'
import { useSalarioState } from './Context'

const LoboEstepario = () => {

    const salario = useSalarioState().salario
    return (
        <div className='lobo-estepario'>
            <h3>Total: {salario * 6}</h3>    
        </div>
    )
}

export default LoboEstepario