import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Pokemons from './pages/Pokemons'
import '../App.css'
import { routes } from './Routes'
import Types from './pages/Types'
import Pokemon from './components/Pokemon'

const AppC14 = () => {
    return (
        <div>
            <Routes>
                <Route path={routes.home} element={<Home/>}>
                    <Route path={routes.pokemons} element={<Pokemons/>}>
                        <Route path={routes.pokemon} element={<Pokemon/>}/>
                    </Route>

                    <Route path={routes.types} element={<Types/>}/>
                </Route>
            </Routes>
        </div>
    )
}

export default AppC14