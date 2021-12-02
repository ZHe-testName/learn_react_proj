import React from 'react';
import MyButton from '../UI/my_button/MyButton';
import MyInput from '../UI/my_input/MyInput';

const Login = () => {
    return (
        <div>
            <h1>
                Login page
            </h1>

            <form>
                <MyInput type='text' placeholder='Login'/>

                <MyInput type='password' placeholder='Password'/>

                <MyButton>Login</MyButton>
            </form>
        </div>
    );
};

export default Login;