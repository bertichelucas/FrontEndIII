import React from 'react'

const Todolist = ({added, setAdded}) => {

    const todolist = [
        'tarea1',
        'tarea2',
        'tarea3',
        'tarea4'
    ]

    return (
        <div>
            <h1>Agregar Tareas</h1>
            {
                todolist.map(item =>{
                    return(
                        <>
                        <li>{item}</li>
                        <button onClick={()=> setAdded([...added, item])}>Agregar a la lista</button>
                    </>
                    )
                })
            }
        </div>
    )
}

export default Todolist