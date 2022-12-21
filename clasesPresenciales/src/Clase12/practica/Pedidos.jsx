import React, {useState} from 'react'
import { useEffect } from 'react'
import Pedido from './Pedido'

const Pedidos = () => {

    const [pedido, setpedido] = useState(null)

    useEffect(()=>{
        setTimeout(()=>{
            setpedido('pizza')
        }, 2000)
    }, [])
    

    return (
        <div>
            <h1>Su pedido: </h1>
            {pedido && <Pedido pedido={pedido}/>}
            <button onClick={() => setpedido(null)}>Cancelar Pedido</button>
        </div>
    )
}

export default Pedidos