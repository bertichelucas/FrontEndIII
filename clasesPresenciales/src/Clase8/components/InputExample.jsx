import React from 'react'
import { useState } from 'react'

const InputExample = () => {
    const [name, setName] = useState('')
    return (
        <div>
            <h1>Hola {name}</h1>
            <input type="text" onChange={(e)=> setName(e.target.value)}/>
        </div>
    )
}

export default InputExample