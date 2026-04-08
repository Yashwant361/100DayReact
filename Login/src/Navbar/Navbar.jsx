import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate();

    return (
        <div className='navbar'>
            <h2>My App</h2>
            <button onClick={() => navigate('/')}>Login</button>
        </div>
    )
}

export default Navbar