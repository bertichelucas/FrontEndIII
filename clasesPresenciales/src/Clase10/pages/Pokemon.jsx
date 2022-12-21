import React, { useEffect } from 'react'
import { useState } from 'react'

const Pokemon = () => {

    const url = "https://pokeapi.co/api/v2/pokemon"
    const [poke, setPoke] = useState([])
    useEffect(() => {
        fetch(url)
        .then(res =>  res.json())
        .then(data => {
            setPoke(data.results)
        })
    }, [])
    return (
        <div>
            {poke.map(item => <li>{item.name}</li>)}
        </div>
    )
}

export default Pokemon