import React from 'react';
import Post from './Post';

const PostsList = ({ posts, deletePost }) => {
    return (
        <div>
            <h2>Posts</h2>
        
            <ul className='posts_list'>
                {
                    posts.map(post => <Post 
                                        key={post.id} 
                                        id={post.id}
                                        title={post.title} 
                                        description={post.description}
                                        deletePost={deletePost}/>)
                }
            </ul>
        </div>
    );
};

export default PostsList;