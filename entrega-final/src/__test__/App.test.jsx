import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, screen } from '@testing-library/react'
import Navbar from '../Components/Navbar';
import { ContextProvider } from '../Components/utils/global.context';
import { BrowserRouter } from 'react-router-dom';

// 1. TESTEAS QUE EL COMPONENTE SE ESTÉ RENDERIZANDO Y ESTÉ ASUMIENDO LAS PROPS.
test('Render NavBar test tiene links', () => {

    render(
        <ContextProvider>
            <BrowserRouter>
                <Navbar/>
            </BrowserRouter>
        </ContextProvider>
    )
    const links = screen.getAllByRole("link")
    
    expect(links).toHaveLength(3)

})

//2. EVALUAMOS QUE UN EVENTO SE ESTÉ EJECUTANDO EN NUESTRO COMPONENTE.
test('NavBar clickear el boton me cambia el tema', () => {
    render(
        <ContextProvider>
        <BrowserRouter>
            <Navbar/>
        </BrowserRouter>
    </ContextProvider>
    )
    const button = screen.getByRole('button')
    
    
    fireEvent.click(button)
    const navClass = screen.getByRole('navigation').getAttribute('class')
    expect(navClass).toBe('Dark')
    //NOTE.
    //CON FORMULARIOS FIREEVENT FUNCIONA IGUAL, SOLO QUE CAMBIA
    //CLICK, POR SUBMIT.
})


