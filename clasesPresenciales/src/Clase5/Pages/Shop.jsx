import React from 'react'
import Header from '../Components/Header'
import productos from '../productos.json'
import styles from '../styles/Shop.module.css'

const Shop = () => {
    console.log(productos)
    return (
        <div>
            <Header titulo="Shop"/>
            {
                productos.map((item) =>{
                    return(
                        <div key={item.id} className={styles.card}>
                            <img src={item.imagen} alt="" className={styles.imagen}/>
                            <h3 className={styles.titulo}>{item.nombre}</h3>
                            <h4 className={styles.precio}>{item.precio}</h4>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Shop