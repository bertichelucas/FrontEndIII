import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useContextProvider } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
    
    const contextState = useContextProvider().contextState
    
    const params = useParams()
    const [data, setData] = useState({})
    
    
    useEffect(()=>{

        
        const url = `https://jsonplaceholder.typicode.com/users/${params.id}`

        axios(url)
        .then(res => setData(res.data))
    },[params])

    return (
        <div className={`table${contextState.theme}`}>
        <h1>Detail Dentist {data.id} </h1>
        {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
        {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
        <table>
        <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Telefono</th>
            <th>Sitio web</th>
        </tr>
        <tbody>
        <tr>
            <th>{data.name}</th>
            <th>{data.email}</th>
            <th>{data.phone}</th>
            <th>{data.website}</th>
        </tr>
        </tbody>
        </table>
        </div>
    )
}

export default Detail