import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'


const Pokemon = () => {

    const params = useParams()
    const url = `https://pokeapi.co/api/v2/pokemon/${params.name}`

    const [poke, setPoke] = useState({})

    useEffect(()=>{
        axios(url)
        .then(res => setPoke(res.data))
    }, [params])

    return (
        <div>
            <h1>{poke.name}</h1>
            <img src={poke.sprites.front_default} alt=''/>
        </div>
    )
}

export default Pokemon