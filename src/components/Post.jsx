import React from 'react';
import { useHistory } from 'react-router';
import MyButton from '../UI/my_button/MyButton';

const Post = ({title, body, id, deletePost}) => {
    const deletePostHandlaer = id => deletePost(id);

    //хук useHistory используется для того чтобы 
    //можно было переходить по маршрутам без помощи Link

    //хук возвращает обьект с множеством свойств о маршрутах
    //также в нем есть функция push которая позволяет переходить между маршрутами
    const router = useHistory();

    return (
        <li className='post'>
            <div>
                <strong>{id}. {title}</strong>

                <div>{body}</div>
            </div>

            <div className='post_buttons_wrap'>
                <MyButton
                    onClick={() => router.push('/posts/' + id)}>Go To</MyButton>

                <MyButton
                    onClick={() => deletePostHandlaer(id)}>Delete</MyButton>
            </div>
        </li>
    );
};

export default Post;