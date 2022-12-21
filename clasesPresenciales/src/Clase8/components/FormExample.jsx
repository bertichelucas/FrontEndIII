import React from 'react'
import { useState } from 'react'

const FormExample = () => {
    const [user,setUser] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        birth: ''
    })

    const handleSubmit = (e) =>{
        e.preventDefault()
    }
    
    const handleChange = (e) =>{
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <label htmlFor="">Nombre</label>
                <input type="text" name='name' onChange={handleChange}/>
                <label htmlFor="">Mail</label>
                <input type="email"   name='email' onChange={handleChange}/>
                <label htmlFor="">Password</label>
                <input type="password" name='password' onChange={handleChange}/>
                <label htmlFor="">Telefono</label>
                <input type="number" name='phone' onChange={handleChange}/>
                <label htmlFor="">Fecha de Nacimiento</label>
                <input type="text" name='birth' onChange={handleChange}/>
                <button type='submit'>Registrar Usuario</button>
            </form>

            <h1>Informacion Ingresada</h1>
            <h4>Nombre: {user.name}</h4>
            <h4>Email: {user.email}</h4>
            <h4>Password: {user.password}</h4>
            <h4>Telefono: {user.phone}</h4>
            <h4>Cumpleaños: {user.birth}</h4>
        </div>
    )
}

export default FormExample