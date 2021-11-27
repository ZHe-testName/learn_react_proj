import React from 'react';
import MyInput from '../UI/my_input/MyInput';
import MySelect from '../UI/my_select/MySelect';

const PostsFilter = ({filter, setFilter, optionsArr}) => {
    return (
        <div>
            <MyInput 
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder='Search to...'/>

            <MySelect
                value={filter.sort} 
                options={optionsArr} 
                defaultValue='Sort on...'
                onChange={sortValue => setFilter({...filter, sort: sortValue})}/>
        </div>
    );
};

export default PostsFilter;