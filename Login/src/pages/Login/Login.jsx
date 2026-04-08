import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../utils/auth';
import "./Login.css"



function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('All Fields are required');
            return;
        }
        const success = loginUser(email, password);

        if (success) {
            navigate("/dashboard");
        }
        else {
            setError("Invalid credentials")
        }
    }
    return (
        <>
            <div className='login-container'>
                <form className='login-form' onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    {error && <p className='error'>{error}</p>}

                    <input
                        type='email'
                        placeholder='Enter email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type='password'
                        placeholder='Enter password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type='submit'>Login</button>
                    <p onClick={() => navigate('/register')} className='link'>
                        New User ?  Go to Register
                    </p>

                </form>
            </div>
        </>
    )
}

export default Login