import React from 'react'

const Article = ({producto}) => {
    return (
        <div>
            <h2>{producto.producto}</h2>
            <h3>{producto.precio}</h3>
        </div>
    )
}

export default Article