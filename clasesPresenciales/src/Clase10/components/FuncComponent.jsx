import React, {useState} from "react";
import { useEffect } from "react";


const FuncComponent = () => {
    const [user, setUser] = useState({
        name: "Lucas",
        count: 0
    })

    
    useEffect(() => {
        console.log("Esto se ejecuta una sola vez")
    }, [])

    useEffect(() => {
        console.log("Esto se ejecuta cada vez que el user se modifica")
    }, [user])

    return (
        <div>
            <h1>FuncComponent</h1>
            <h2>Hello {user.name}</h2>
            <p>{user.count}</p>
            <button onClick={() => setUser({...user, count: user.count + 1})}>Sumar al contador</button>
            <button onClick={() => setUser({...user, count: user.count - 1})}>Restar al contador</button>
        </div>
    )
}

export default FuncComponent