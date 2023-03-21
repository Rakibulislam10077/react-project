import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const SignUp = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [CreateUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }
    const handleConfirm = (event) => {
        setConfirm(event.target.value);
    }

    if (user) {
        navigate('/shop');
    }

    const handleCreateNewUser = (event) => {
        event.preventDefault();
        if (password !== confirm) {
            setError('Your two password is not match');
            return;
        }
        if (password.length < 6) {
            setError('Password must be 6 characters or longer')
            return;
        }

        CreateUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>SignUp</h1>
                <form onSubmit={handleCreateNewUser}>
                    <div className='form-group'>
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmail} type="email" placeholder='enter your email' required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePassword} type="password" placeholder='enter your password' required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password">Confirm Password</label>
                        <input onBlur={handleConfirm} type="password" placeholder='enter your password' required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <div className='btnAndLink'>
                        <input onClick={handleCreateNewUser} type='submit' value='SignUp' className='login' />
                        <p>Already have an account? <Link to='/login'>Login</Link></p>
                    </div>
                </form>
            </div>
            <div className='orLine'>
                <div></div>
                <p>or</p>
                <div></div>
            </div>
            <div>
                <button className='googleBtn'>Continue with google</button>
            </div>

        </div>
    );
};

export default SignUp; <h1>Sign up</h1>