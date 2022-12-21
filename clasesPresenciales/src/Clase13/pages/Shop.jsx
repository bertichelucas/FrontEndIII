import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link, Outlet } from 'react-router-dom'

const Shop = ({data}) => {
    
    return (
        <div>
            <Outlet/>
            {
            data?.map(item =>  <Link to={'/shop/' + item.id}><li>{item.title}</li></Link>)
            }
        </div>
    )
}

export default Shop