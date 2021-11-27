import React from 'react';
import c from './my_modal.module.css';

const MyModal = ({children ,visible, setVisible}) => {
    return (
        <div 
            className={visible ? [c.modalWrap, c.active].join(' ') : c.modalWrap}
            onClick={() => setVisible(false)}
            >
            <div 
                className={c.modal}
                onClick={e => e.stopPropagation()}
                >
                <button 
                    className={c.closse}
                    onClick={() => setVisible(false)}>
                    X
                </button>

                <h3 style={{textAlign: 'center'}}>
                    Add post
                </h3>

                {children}
            </div>
        </div>
    );
};

export default MyModal;