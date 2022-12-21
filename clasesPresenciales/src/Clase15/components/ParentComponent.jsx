import React from 'react'
import ChildComponent from './ChildComponent'
import { useSalarioState } from './Context'

const ParentComponent = () => {

    const {salario, setSalario}= useSalarioState()

    return (
        <div className='parent'>
            <h1>ParentComponent</h1>
            <ChildComponent/>

            <p>Salario: {salario}</p>
        </div>
    )
}

export default ParentComponent