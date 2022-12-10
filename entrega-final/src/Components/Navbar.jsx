import React from 'react'
import { Link } from 'react-router-dom'
import { useContextProvider } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context



const Navbar = () => {

    const contextState = useContextProvider().contextState
    const dispatchContextState = useContextProvider().dispatchContextState
    

    const handleThemeChange = () =>{
        contextState.theme === 'Light' ? dispatchContextState({type: 'Dark'}) : dispatchContextState({type: 'Light'})
    }

    return (
        <nav className={contextState.theme}>
        <div>
            <img src={contextState.theme==='Light'?"/images/DH.png": "/images/DHdark.png"} alt="" />
        </div>
        
        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        <div className='links'>
            <Link to={'/home'}>Home</Link>
            <Link to={'/contacto'}>Contacto</Link>
            <Link to={'/destacados'}>Favoritos</Link>
        </div>
        <button className='buttonTheme' onClick={handleThemeChange}>{contextState.theme === 'Light'? <span>🌙</span>: <span>☀️</span>}</button>
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        </nav>
    )
}

export default Navbar