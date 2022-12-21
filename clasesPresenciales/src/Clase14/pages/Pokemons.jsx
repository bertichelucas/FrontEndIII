import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link, Outlet } from 'react-router-dom'

const Pokemons = () => {

    const [pokeList, setPokeList] = useState()
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=150&pffset=0'

    useEffect(()=>{
        axios(url)
        .then(res => setPokeList(res.data.results))
    }, [])

    return (
        <div>
            <Outlet/>
            <ul>
                {
                    pokeList?.map(pokemon => <Link to={pokemon.name} key={pokemon.name}><li>{pokemon.name}</li></Link>)
                }
            </ul>
        </div>
    )
}

export default Pokemons