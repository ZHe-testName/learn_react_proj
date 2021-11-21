import React from 'react';

const Post = ({title, description}) => {
    return (
        <li className='post'>
            <div>
                <strong>{title}</strong>

                <div>{description}</div>
            </div>

            <button>Delete</button>
        </li>
    );
};

export default Post;