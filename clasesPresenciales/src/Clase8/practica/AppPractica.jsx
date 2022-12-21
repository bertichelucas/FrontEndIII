import React from 'react'
import { useState } from 'react'
import Todolist from './Todolist'
import Todoadded from './Todoadded'
import '../../App.css'

const AppPractica = () => {
    const [added, setAdded] = useState([])
    return (
        <div>
            <Todolist added={added} setAdded={setAdded}/>
            <Todoadded  added={added} />
        </div>
    )
}

export default AppPractica