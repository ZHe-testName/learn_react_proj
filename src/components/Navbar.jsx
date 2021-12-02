import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navigation'>
            <div>
                <Link to='/posts'>
                    Posts
                </Link>

                <Link to='/about'>
                    About
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;