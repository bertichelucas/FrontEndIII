import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../App.css'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Shop from './pages/Shop'
import Card from './components/Card'

const AppC13 = () => {

    const [data, setData] = useState()
    const url = 'https://api.mercadolibre.com/sites/MLA/search?q=zapatillas'

    useEffect(()=>{
        axios(url)
        .then(res => setData(res.data.results))
    }, [])


    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}>
                    <Route path='/shop' element={<Shop data={data}/>}>
                        <Route path='/shop/:id' element={<Card data={data}/>}/>
                    </Route>
                    <Route path='/contacto' element={<Contact/>}/>
                </Route>
            </Routes>
        </div>
    )
}

export default AppC13