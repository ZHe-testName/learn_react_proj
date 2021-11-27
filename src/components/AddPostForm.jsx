import React, { useState } from 'react';
import MyButton from '../UI/my_button/MyButton';
import MyInput from '../UI/my_input/MyInput';

const AddPostForm = ({addPost}) => {
    //можно создавать неконролируемые инпуты с помощю хука useRef()
    //а можно контролировать их при помощи 
    //двухстороннего связывания
    const [post, setPost] = useState({title: '', description: '',});

    const addPostHandler = e => {
        e.preventDefault();

        addPost(post);

        setPost({title: '', description: '',});
    };

    return (
        <form>
            <MyInput 
                placeholder='Title'
                value={post.title}
                onChange={e => {setPost({...post, title: e.target.value})}}/>

            <MyInput 
                placeholder='Description'
                value={post.description}
                onChange={e => {setPost({...post, description: e.target.value})}}/>

            <MyButton
                onClick={addPostHandler}>
                Create
            </MyButton>
        </form>
    );
};

export default AddPostForm;