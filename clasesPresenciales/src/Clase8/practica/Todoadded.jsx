import React from 'react'

const Todoadded = ({added}) => {
    console.log(added)
    return (
        <div>
            <h2>TareasAgregadas</h2>
            {
                added.map(item =><li>{item}</li>)
            }
        </div>
    )
}

export default Todoadded