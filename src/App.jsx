import React from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostsList from "./components/PostsList";

import './App.css';

const postsArr = [
    {id: '1', title: 'JavaScript', description: 'JS'},
    {id: '2', title: 'TypeScript', description: 'TS'},
    {id: '3', title: 'Phyton', description: 'PY'},
];

function App (){
    return (
        <div className='app'>
            <Counter />

            <ClassCounter />

            <PostsList posts={postsArr}/>
        </div>
    );
};

export default App;