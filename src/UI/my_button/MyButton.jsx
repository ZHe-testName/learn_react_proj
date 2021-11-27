import React from 'react';
import c from './my_button.module.css';

const MyButton = ({children, ...props}) => {
    return (
        <button 
                className={c.myButton}
                {...props}>
            {children}
        </button>
    );
};

export default MyButton;