import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import MyButton from '../UI/my_button/MyButton';
import MyInput from '../UI/my_input/MyInput';

const Login = () => {
    const { setIsAuth } = useContext(AuthContext);

    const login = (e) => {
        e.preventDefault();

        setIsAuth(true);

        localStorage.setItem('auth', 'true');
    };

    return (
        <div>
            <h1>
                Login page
            </h1>

            <form onSubmit={login}>
                <MyInput type='text' placeholder='Login'/>

                <MyInput type='password' placeholder='Password'/>

                <MyButton>Login</MyButton>
            </form>
        </div>
    );
};

export default Login;