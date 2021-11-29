import React from 'react';
import Post from './Post';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const PostsList = ({ posts, deletePost }) => {
    return (
        <div>
            <h2>Posts</h2>
        
            {
                (posts.length)
                ?
                <ul className='posts_list'>
                    <TransitionGroup>
                    {
                        posts.map(post => <CSSTransition
                                                key={post.id} 
                                                timeout={500}
                                                classNames="item"
                                            >
                                            <Post 
                                                id={post.id}
                                                title={post.title} 
                                                body={post.body}
                                                deletePost={deletePost}/>
                                            </CSSTransition>)
                    }
                    </TransitionGroup>
                </ul>
                :
                <h1 className='h1_not_found'>Posts are not found</h1>
            }
        </div>
    );
};

export default PostsList;