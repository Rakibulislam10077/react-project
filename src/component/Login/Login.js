import React, { useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [signInUserWithEmailAndPassword, user, loading] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth);

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';


    if (user) {
        navigate(from, { replace: true });
    }

    const handelLoginForm = (event) => {
        event.preventDefault();

        if (password.length < 6) {
            setError('Password must be 6 characters or longer')
        }


        signInUserWithEmailAndPassword(email, password);
    }


    const googleSingIn = () => {
        signInWithGoogle(email, password);
    }

    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Login</h1>
                <form onSubmit={handelLoginForm}>
                    <div className='form-group'>
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmail} type="email" placeholder='enter your email' required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePassword} type="password" placeholder='enter your password' required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <div className='btnAndLink'>
                        <input onClick={handelLoginForm} type='submit' value='Login' className='login' />
                        <p>New to Ema-john? <Link to='/signup'>Create New Account</Link></p>
                    </div>
                </form>
            </div>
            <div className='orLine'>
                <div></div>
                <p>or</p>
                <div></div>
            </div>
            <div>
                <button onClick={googleSingIn} className='googleBtn'>Continue with google</button>
            </div>

        </div>
    );
};

export default Login;