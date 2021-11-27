import React from 'react';
import c from './my_input.module.css';

const MyInput = (props) => {
    return (
        <input
            className={c.myInput} 
            {...props}>
            
        </input>
    );
};

export default MyInput;