import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import AppC17 from './Clase17/AppC17'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* Aca iria el context */}
            <BrowserRouter>
                <AppC17 />
            </BrowserRouter>
    </React.StrictMode>
)
