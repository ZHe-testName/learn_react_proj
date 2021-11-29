import React, { useState, useMemo, useEffect } from "react";
import PostsList from "./components/PostsList";
import axios from 'axios';

import './App.css';
import AddPostForm from "./components/AddPostForm";
import PostsFilter from "./components/PostsFilter";
import MyModal from "./UI/my_modal/MyModal";
import MyButton from "./UI/my_button/MyButton";
import usePosts from "./hooks/usePosts";

// const initialPostsState = [
//     {id: '1', title: 'JS', description: 'jjj'},
//     {id: '2', title: 'TypeScript', description: 'mnnmm'},
//     {id: '3', title: 'Phyton', description: 'ppoui'},
// ];

const optionsArr = [
    {title: 'title', value: 'title'},
    {title: 'body', value: 'body'},
];

function App (){
    const [postsArr, setPostsArr] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: '',});
    const [modalIsVisible, setModalVisible] = useState(false);

    const sortedAndSelectedPosts = usePosts(postsArr, filter.sort, filter.query);
    
    async function fetchPosts (){
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
                                    .then(res => res.data.slice(0, 40));

        setPostsArr(response);
    };

    useEffect(fetchPosts, []);

    function addPost (post){
        const newPost = {
            ...post,
            id: Date.now(),
        };

        setPostsArr([...postsArr, newPost]);

        setModalVisible(false);
    };

    function deletePost (id){
        setPostsArr(postsArr.filter(post => post.id !== id));
    };

    return (
        <div className='app'>
            <MyModal
                visible={modalIsVisible}
                setVisible={setModalVisible}>
                <AddPostForm addPost={addPost}/>
            </MyModal>

            <h1 style={{textAlign: 'center'}}>MY APP</h1>

            <PostsFilter 
                optionsArr={optionsArr}
                filter={filter}
                setFilter={setFilter}/>

            <MyButton 
                onClick={() => setModalVisible(true)}
                >
                Add Post
            </MyButton>

            <PostsList posts={sortedAndSelectedPosts} deletePost={deletePost}/>
        </div>
    );
};

export default App;