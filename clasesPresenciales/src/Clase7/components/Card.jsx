import React, { useState } from 'react'
import styles from '../styles/Shop.module.css'

const Card = ({item, carrito, setCarrito}) => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <div key={item.id} className={styles.card}>
                            <img src={item.imagen} alt="" className={styles.imagen}/>
                            <h3 className={styles.titulo}>{item.nombre}</h3>
                            <h4 className={styles.precio}>{item.precio}</h4>
                            <h4>Stock: {count}</h4>
                            <button onClick={() => setCount(count + 1)}>+</button>
                            <button onClick={() => setCount(count - 1)}>-</button>

                            <button onClick={() => setCarrito([...carrito, {...item, stock: count}])}>Agregar al Carrito</button>
                        </div>
        </div>
    )
}

export default Card