import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useActionData } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipping = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [error, setError] = useState('');


    // const navigate = useNavigate();


    const handleNameBlur = (event) => {
        setName(event.target.value);
    }

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handleAddress = (event) => {
        setPassword(event.target.value);
    }
    const handlePhone = (event) => {
        setConfirm(event.target.value);
    }

    const handleCreateNewUser = (event) => {
        event.preventDefault();
    }


    return (
        <div className='form-container'>
            <h1 className='form-title'>SignUp</h1>
            <form onSubmit={handleCreateNewUser}>
                <div className='form-group'>
                    <label htmlFor="name">Your Name</label>
                    <input onBlur={handleNameBlur} type="text" placeholder='enter your name' required />
                </div>
                <div className='form-group'>
                    <label htmlFor="email">Your Email</label>
                    <input value={user?.email} readOnly type="email" placeholder='enter your email' required />
                </div>
                <div className='form-group'>
                    <label htmlFor="address">Address</label>
                    <input onBlur={handleAddress} type="text" placeholder='enter your Address' required />
                </div>
                <div className='form-group'>
                    <label htmlFor="password">Phone</label>
                    <input onBlur={handlePhone} type="text" placeholder='enter your phone' required />
                </div>
                <p style={{ color: 'red' }}>{error}</p>
                <div className='btnAndLink'>
                    <input onClick={handleCreateNewUser} type='submit' value='Add shipping' className='login' />
                </div>
            </form>
        </div>
    );
};

export default Shipping;