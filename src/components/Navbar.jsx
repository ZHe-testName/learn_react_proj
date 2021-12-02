import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);

        localStorage.removeItem('auth');
    };

    return (
        <nav className='navigation'>
            {
                isAuth
                    ?
                    <div>
                        <Link to='/posts'>
                            Posts
                        </Link>
        
                        <Link to='/about'>
                            About
                        </Link>

                        <button onClick={logout}>
                            Logoff
                        </button>
                    </div>
                    :
                    null
            }
        </nav>
    );
};

export default Navbar;