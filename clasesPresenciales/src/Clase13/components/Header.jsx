import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {

    const navigate = useNavigate()

    return (
        <div>
            <h3 onClick={()=> navigate(-1)}>Back</h3>
            <img src="https://1.bp.blogspot.com/-wahf8oCRWDc/X8uecfWoDfI/AAAAAAAAMtE/fzr2CcieYi0oO53K0m9bkHCD8y-e6wPCACLcBGAsYHQ/s456/facebook%2Blogo%2Bpng%2Bsin%2Bfondo%2B%25281%2529.png" alt="" style={{width:100, height:100}}/>
            <Link to='/'><h3>Home</h3></Link>
            <Link to='/shop'><h3>Shop</h3></Link>
            <Link to='/contacto'><h3>Contacto</h3></Link>

            
            
            
        </div>
    )
}

export default Header