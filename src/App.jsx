import React, { useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostsList from "./components/PostsList";

import './App.css';
import AddPostForm from "./components/AddPostForm";

const initialPostsState = [
    {id: '1', title: 'JavaScript', description: 'JS'},
    {id: '2', title: 'TypeScript', description: 'TS'},
    {id: '3', title: 'Phyton', description: 'PY'},
];

function App (){
    const [postsArr, setPostsArr] = useState(initialPostsState);

    function addPost (post){
        const newPost = {
            ...post,
            id: Date.now(),
        };

        setPostsArr([...postsArr, newPost]);
    };

    return (
        <div className='app'>
            <Counter />

            <ClassCounter />

            <AddPostForm addPost={addPost}/>

            <PostsList posts={postsArr}/>
        </div>
    );
};

export default App;