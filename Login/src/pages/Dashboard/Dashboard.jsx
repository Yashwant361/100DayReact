import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { isAuthenticated } from '../../utils/auth';

function Dashboard() {

    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated()) {
            navigate('/')
        }
    }, []);

    const HandleLogout = () => {
        logoutUser();
        navigate('/')
    }
    return (
        <>
            <div className='dashboard'>
                <h1>Welcome to Dashboard</h1>

                <button onClick={() => navigate("/home")}>Go to Home</button>
                <button onClick={HandleLogout}>Logout</button>
            </div>
        </>
    )
}

export default Dashboard