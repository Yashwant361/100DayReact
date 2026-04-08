import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../utils/auth';
import './Register.css'



function Register() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, password } = formData;

        if (!name || !email || !password) {
            setError('All fields are required')
            setSuccess("");
            return
        }
        //save user 
        const user = { name, email, password };
        localStorage.setItem('user', JSON.stringify(user));

        setSuccess('Registered Successfully');
        setError('')

        //Redirect 
        setTimeout(() => {
            navigate('/')
        }, 1000)
    }
    return (
        <>
            <div className="register-container">
                <form className="register-form" onSubmit={handleSubmit}>
                    <h2>Register</h2>
                    {error && <p className='error'>{error}</p>}
                    {success && <p className='success'>{success}</p>}

                    <input
                        type='text'
                        name='name'
                        placeholder='Enter Name'
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <input
                        type='email'
                        name='email'
                        placeholder='Enter email'
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <input
                        type='password'
                        name='password'
                        placeholder='Enter password'
                        value={formData.password}
                        onChange={handleChange}
                    />


                    <button type='submit'>Register</button>

                    <p className="link" onClick={() => navigate("/")}>
                        Already have an account? Login
                    </p>
                </form>
            </div>
        </>
    )
}

export default Register