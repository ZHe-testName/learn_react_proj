import React from 'react';
import Post from './Post';

const PostsList = ({ posts }) => {
    return (
        <ul className='posts_list'>
            {
                posts.map(post => <Post 
                                    key={post.id} 
                                    title={post.title} 
                                    description={post.description}/>)
            }
        </ul>
    );
};

export default PostsList;