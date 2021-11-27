import React, { useState, useMemo } from "react";
import PostsList from "./components/PostsList";

import './App.css';
import AddPostForm from "./components/AddPostForm";
import PostsFilter from "./components/PostsFilter";
import MyModal from "./UI/my_modal/MyModal";
import MyButton from "./UI/my_button/MyButton";

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
    const [filter, setFilter] = useState({sort: '', query: '',});
    const [modalIsVisible, setModalVisible] = useState(false);

    function addPost (post){
        const newPost = {
            ...post,
            id: Date.now(),
        };

        setPostsArr([...postsArr, newPost]);

        setModalVisible(false);
    };

    function getSortedPosts (){
        return (filter.sort)
                ? 
                [...postsArr].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
                :
                postsArr;
    };

    function deletePost (id){
        setPostsArr(postsArr.filter(post => post.id !== id));
    };

    //с помощю useMemo мы добиваемся оптимизации
    //без этого у нас будут перерисовки и фильтрация постов на каждый клик в
    //инпуте поиска поста

    //в массиве зависимостей мы следим за некоторыми данными и толко после их
    //измененй будет перекеширование и вызов функции
    //а так вычисления будут браться из еша и проводится не будут
    const sortedPosts = useMemo(getSortedPosts, [filter.sort, postsArr]);

    const sortedAndSelectedPosts = useMemo(() => sortedPosts
                                                    .filter(p => p.title.toLowerCase().includes(filter.query.toLowerCase())
                                                    ), [filter.query, sortedPosts]);

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