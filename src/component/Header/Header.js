import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const signOutBtn = () => {
        signOut(auth)
            .then(() => { })
    }

    return (
        <nav className='header_nav'>
            <img src={logo} alt="" />
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/Orders">Orders</Link>
                <Link to="/Inventory">Inventory</Link>
                <Link to="/About">About</Link>
                <Link to='/shipping'>Shipping</Link>
                {
                    user?.uid
                        ?
                        <button onClick={() => signOutBtn(auth)} className='loginBtn'>Log Out</button>
                        :
                        <Link to='/login'><button className='loginBtn'>Login</button></Link>
                }
            </div>
        </nav>
    );
};

export default Header;