import React, { useState, useMemo, useEffect } from "react";
import PostsList from "./components/PostsList";

import './App.css';
import AddPostForm from "./components/AddPostForm";
import PostsFilter from "./components/PostsFilter";
import MyModal from "./UI/my_modal/MyModal";
import MyButton from "./UI/my_button/MyButton";
import usePosts from "./hooks/usePosts";
import PostService from "./API/PostService";
import MyLoader from "./UI/my_loader/MyLoader";

const optionsArr = [
    {title: 'title', value: 'title'},
    {title: 'body', value: 'body'},
];

function App (){
    const [postsArr, setPostsArr] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: '',});
    const [modalIsVisible, setModalVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const sortedAndSelectedPosts = usePosts(postsArr, filter.sort, filter.query);
    
    async function fetchPosts (){
        setIsLoading(true);

        const posts = await PostService.getAll();

        setPostsArr(posts);

        setIsLoading(false);
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

            {
                (isLoading)
                    ? 
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '100px',
                        }}>
                        <MyLoader />
                    </div>
                    :
                    <PostsList posts={sortedAndSelectedPosts} deletePost={deletePost}/>
            }
        </div>
    );
};

export default App;