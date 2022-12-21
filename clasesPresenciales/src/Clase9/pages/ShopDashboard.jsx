import React, { useState } from 'react'
import Article from '../components/Article'

const ShopDashboard = ({titulo}) => {

    const [productoSelect, setProductoSelect] = useState()
    const [discSelect, setDiscSelect] = useState(0)

    let lista = [
        {id: 1, producto: 'Remera', precio: 2500},
        {id: 2, producto: 'Pelota', precio: 4000},
        {id: 3, producto: 'Jean', precio: 8000},
    ]

    const product = lista.find(item => item.producto === productoSelect)

    return (
        <div>
            <h1>Bienvenidos al {titulo}</h1>
            {
                /*lista.map(item => <Article key={item.id} producto={item}/>)*/
            }
            <form>
                <select name="" id="" onChange={(e) => setProductoSelect(e.target.value)}>
                    {
                    lista.map((item, index) => <option value={item.producto}>{item.producto}</option>)
                    }
                </select>
                <h2>Producto seleccionado: {productoSelect}</h2>
                <select name="" id="" onChange={(e) => setDiscSelect(e.target.value)}>
                    <option value={10}>10%</option>
                    <option value={20}>20%</option>
                    <option value={30}>30%</option>
                </select>
                <h2>Descuento seleccionado: {discSelect}</h2>
                <h2>Precio total: {product?.precio * ((100 - discSelect) / 100)}</h2>
            </form>

        </div>
    )
}

export default ShopDashboard