import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Card from "../Components/Card";
import { useContextProvider } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
    
    const [favourites, setFavourites] = useState([])
    
    const contextState = useContextProvider().contextState
    const favs = useContextProvider().favs
    const setFavs = useContextProvider().setFavs

    const resetFavs = () =>{
        localStorage.setItem('favs', JSON.stringify([]))
        setFavs([])
    }
    

    useEffect(()=> {
        setFavourites(JSON.parse(localStorage.getItem('favs')))
    }, [favs])
    return (
        <div className={`favs${contextState.theme}`}>
        <h1>Dentistas Favoritos</h1>
        <div className="card-grid">
            {/* este componente debe consumir los destacados del localStorage */}
            {
                favourites.map(item => <Card name={item.name} username={item.username} id={item.id} key={item.id} />)
            }
            {/* Deberan renderizar una Card por cada uno de ellos */}
        </div>
        <div className="rstButtonDiv">
            <button className="button" onClick={resetFavs}>Reset⚡</button>
        </div>
        </div>
    );
};

export default Favs;
