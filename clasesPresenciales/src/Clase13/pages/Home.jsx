import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Home = () => {
    return (
        <div>
            <Header/>
            <h1>Bienvenidos a nuestro primer E-commerce</h1>
            <Outlet/> {/*Este outlet es para traer la ruta hija que corresponda desde AppC13  */}
            <Footer/>
        </div>
    )
}

export default Home