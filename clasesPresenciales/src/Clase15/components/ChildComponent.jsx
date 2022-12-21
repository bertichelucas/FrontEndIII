import React from 'react'
import { useSalarioState } from './Context'

const ChildComponent = () => {

    const {salario, setSalario} = useSalarioState()

    return (
        <div className='child'>
            <h3>ChildComponent</h3>
            <button onClick={()=> setSalario(salario + 10000)}>Aumentar</button>
            <p>Cuanto Ganas por semestre?</p>
            <h3>Total: {salario*6}</h3>
        </div>
    )
}

export default ChildComponent