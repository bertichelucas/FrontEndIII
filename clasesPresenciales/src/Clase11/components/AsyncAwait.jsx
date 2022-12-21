import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

const AsyncAwait = () => {

    const [poke, setPoke] = useState()

    const url = 'https://pokeapi.co/api/v2/pokemon/ditto'

    useEffect(()=>{
        //Con axios
        /*axios(url)
        .then(res => setPoke(res.data))*/

        //Async/await
        const  fetchData = async () =>{
            let res = await fetch(url)
            let data = await res.json()
            setPoke(data)
        }

        fetchData()

    }, [])

    return (
        <div>
            <h1>Aprendiendo Fetch</h1>
            <h2>{poke?.name}</h2>
            <img src={poke?.sprites.front_default} alt="" />
        </div>
    )
}

export default AsyncAwait