import React from 'react'
import '../App.css'
import LocalStgExample from './LocalStgExample'

const AppC16 = () => {
    const user = JSON.parse(localStorage.getItem('user'))

    const borrarLocal = () =>{
        localStorage.removeItem('user')
    }
    return (
        <div>
            {user?.name}
            <LocalStgExample/>
            <button onClick={borrarLocal}>Borrar</button>
        </div>
    )
}

export default AppC16