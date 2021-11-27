import React, { useState, useMemo } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostsList from "./components/PostsList";

import './App.css';
import AddPostForm from "./components/AddPostForm";
import MySelect from "./UI/my_select/MySelect";
import MyInput from "./UI/my_input/MyInput";
import PostsFilter from "./components/PostsFilter";

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

    function addPost (post){
        const newPost = {
            ...post,
            id: Date.now(),
        };

        setPostsArr([...postsArr, newPost]);
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
                                                    .filter(p => p.title.toLowerCase().includes(filter.query.toLowerCase()))
                                                    , [filter.query, sortedPosts]);

    return (
        <div className='app'>
            {/* <Counter />

            <ClassCounter /> */}

            <AddPostForm addPost={addPost}/>

            <hr style={{backgroundColor: 'teal', margin: '10px 0px'}}/>

            <PostsFilter 
                optionsArr={optionsArr}
                filter={filter}
                setFilter={setFilter}/>

            {
                (sortedAndSelectedPosts.length)
                    ? <PostsList posts={sortedAndSelectedPosts} deletePost={deletePost}/>
                    : <h1 className='h1_not_found'>Posts are not found</h1>
            }
        </div>
    );
};

export default App;