import React from 'react'
import Child from './Components/Child'
import Parent from './Components/Parent'

const AppC6 = () => {
    return (
        <Parent>
            {(texto) => <Child texto={texto}/>}
        </Parent>
    )
}

export default AppC6