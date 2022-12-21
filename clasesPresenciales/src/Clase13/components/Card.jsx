import React from 'react'
import { useParams } from 'react-router-dom'

const Card = ({data}) => {
    const params = useParams()
    console.log(params)//Muestro los parámetros de router browser

    let result = data?.find(item => item.id === params.id)

    return (
        <div>
            <h2>{result?.title}</h2>
            <img src={result?.thumbnail} alt="" />
        </div>
    )
}

export default Card