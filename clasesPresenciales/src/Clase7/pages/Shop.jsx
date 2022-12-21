import React from 'react'
import { useState } from 'react'
import Card from '../components/Card'
import Header from '../Components/Header'
import productos from '../productos.json'
import styles from '../styles/Shop.module.css'

const Shop = () => {
    const [carrito, setCarrito] = useState([])
    
    return (
        <div>
            <Header titulo="Shop"/>
            {
                productos.map((item) =>{
                    return(
                        <Card item={item} carrito={carrito} setCarrito={setCarrito}/>
                    )
                })
            }
            {console.log(carrito)}
        </div>
    )
}

export default Shop