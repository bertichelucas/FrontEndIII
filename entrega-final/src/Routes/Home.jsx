import React, {useEffect} from 'react'
import Card from '../Components/Card'
import axios from 'axios'
import { useContextProvider } from "../Components/utils/global.context"


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
    
    const contextState = useContextProvider().contextState
    const dispatchContextState = useContextProvider().dispatchContextState

    const url = 'https://jsonplaceholder.typicode.com/users'
    useEffect(()=>{
        axios(url)
        .then(res => dispatchContextState({payload: res.data}))
         // eslint-disable-next-line
    }, [])

    return (
        <main className={`main${contextState.theme}`} >
        <h1>Home</h1>
        <div className='card-grid'>
            {
                contextState.data?.map(dentista => <Card key={dentista.id} name={dentista.name}  username={dentista.username} id={dentista.id}/>)
            }
        </div>
        </main>
    )
}

export default Home