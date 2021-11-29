import React from 'react';
import MyButton from '../UI/my_button/MyButton';

const Post = ({title, body, id, deletePost}) => {
    const deletePostHandlaer = id => deletePost(id);

    return (
        <li className='post'>
            <div>
                <strong>{title}</strong>

                <div>{body}</div>
            </div>

            <MyButton
                onClick={() => deletePostHandlaer(id)}>Delete</MyButton>
        </li>
    );
};

export default Post;