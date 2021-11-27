import React, { useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostsList from "./components/PostsList";

import './App.css';
import AddPostForm from "./components/AddPostForm";
import MySelect from "./UI/my_select/MySelect";

const initialPostsState = [
    {id: '1', title: 'JS', description: 'jjj'},
    {id: '2', title: 'TypeScript', description: 'mnnmm'},
    {id: '3', title: 'Phyton', description: 'ppoui'},
];

const optionsArr = [
    {title: 'title', value: 'title'},
    {title: 'description', value: 'description'},
];

function App (){
    const [postsArr, setPostsArr] = useState(initialPostsState);
    const [sortingValue, setSortingValue] = useState('');

    function addPost (post){
        const newPost = {
            ...post,
            id: Date.now(),
        };

        setPostsArr([...postsArr, newPost]);
    };

    function deletePost (id){
        setPostsArr(postsArr.filter(post => post.id !== id));
    };

    function sortPosts (value){
        setSortingValue(value);

        setPostsArr([...postsArr].sort((a, b) => a[value].localeCompare(b[value])));
    };

    return (
        <div className='app'>
            <Counter />

            <ClassCounter />

            <AddPostForm addPost={addPost}/>

            <hr style={{backgroundColor: 'teal', margin: '10px 0px'}}/>

            <MySelect
                value={sortingValue} 
                options={optionsArr} 
                defaultValue='Sort on...'
                onChange={sortPosts}/>

            {
                (postsArr.length)
                    ? <PostsList posts={postsArr} deletePost={deletePost}/>
                    : <h1 className='h1_not_found'>Posts are not found</h1>
            }
        </div>
    );
};

export default App;