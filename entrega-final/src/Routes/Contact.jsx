import React from 'react'
import Form from '../Components/Form'
import { useContextProvider } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {

    const contextState = useContextProvider().contextState

    return (
        <div className={`contact${contextState.theme}`}>
            <h1>Contacto</h1>
            <p>Deje su nombre y mail y nos pondremos en contacto</p>
            <Form/>
        </div>
    )
}

export default Contact