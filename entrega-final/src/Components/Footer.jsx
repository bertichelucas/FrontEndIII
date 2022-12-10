import React from 'react'
import { useContextProvider } from './utils/global.context'


const Footer = () => {

    const contextState = useContextProvider().contextState
    return (
        <footer className={`footer${contextState.theme}`}>
            <div className='footer'>
                <p>Powered by</p>
                <img src={contextState.theme==='Light'?"/images/DH.png": "/images/DHdark.png"} alt="" />
                <div className='icons'>
                    <a href="https://facebook.com"  target="_blank" rel="noreferrer"><i className={`fa-brands fa-square-facebook i${contextState.theme}`}></i></a>
                    <a href="https://instagram.com"  target="_blank" rel="noreferrer"><i className={`fa-brands fa-instagram i${contextState.theme}`}></i></a>
                    <a href="https://whatsapp.com"  target="_blank" rel="noreferrer"><i className={`fa-brands fa-whatsapp i${contextState.theme}`}></i></a>
                    <a href="https://tiktok.com"  target="_blank" rel="noreferrer"><i className={`fa-brands fa-tiktok i${contextState.theme}`}></i></a>        
                </div>
            </div>
            
        </footer>
    )
}

export default Footer
