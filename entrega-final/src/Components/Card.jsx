import React from "react";
import { Link } from 'react-router-dom'
import { useContextProvider } from "./utils/global.context";

const Card = ({ name, username, id }) => {

    const card = {
        name: name,
        username: username,
        id: id
    }
    
    const setFavs = useContextProvider().setFavs

    const agregar = () =>{
        const favourites = localStorage.getItem('favs')
        if (favourites){
            let localdata = JSON.parse(favourites)
            const filteredDentist = localdata.filter(item => item.id !== card.id)
            const doesExist = filteredDentist.length !== localdata.length

            doesExist ? localdata = filteredDentist : localdata.push(card)
            doesExist ? window.alert("Se elimino de favoritos!") : window.alert('Se agrego a favoritos!')
            setFavs(localdata)
            localStorage.setItem('favs', JSON.stringify(localdata))
        }else{
            setFavs([card])
            localStorage.setItem('favs', JSON.stringify([card]))
            window.alert("Se agrego a favoritos!")
        }
        
    } 


    return (
        <div className="card">
            {/* En cada card deberan mostrar en name - username y el id */}
            <img src="/images/doctor.jpg" className="imgDoctor" alt="" />
            <div>
                <Link to={`/dentist/${card.id}`} ><h2>{name}</h2></Link>
                <h4>{username}</h4>
            </div>
            {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

            {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
            <button onClick={() => agregar()} className="favButton">⭐</button>
        </div>
    );
};

export default Card;
