import React, { useEffect, useState } from 'react';
import Pagination from '../components/Pagination';
import PostService from '../API/PostService';
import PostsFilter from '../components/PostsFilter';
import PostsList from '../components/PostsList';
import useFetching from '../hooks/useFetching';
import usePosts from '../hooks/usePosts';
import MyButton from '../UI/my_button/MyButton';
import MyLoader from '../UI/my_loader/MyLoader';
import MyModal from '../UI/my_modal/MyModal';
import { getPageCount } from '../utils/getPageCount';
import AddPostForm from '../components/AddPostForm';

const Posts = () => {
    const optionsArr = [
        {title: 'title', value: 'title'},
        {title: 'body', value: 'body'},
    ];

    const [postsArr, setPostsArr] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: '',});
    const [modalIsVisible, setModalVisible] = useState(false);
    const [totalCount, setTotalCount] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const [isLoading, fetching, error] = useFetching(async () => {
        const responce = await PostService.getAll(limit, page);

        setPostsArr([...postsArr, ...responce.data]);

        const totalCount = +responce.headers['x-total-count'];

        setTotalCount(getPageCount(totalCount, limit));
    });

    const sortedAndSelectedPosts = usePosts(postsArr, filter.sort, filter.query);

    useEffect(fetching, [page]);

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
        <div>
            <MyModal
                visible={ modalIsVisible }
                setVisible={ setModalVisible }
                >
                <AddPostForm addPost={ addPost }/>
            </MyModal>

            <h1 style={{textAlign: 'center'}}>MY APP</h1>

            <PostsFilter 
                optionsArr={ optionsArr }
                filter={ filter }
                setFilter={ setFilter }/>

            <MyButton 
                onClick={() => setModalVisible(true)}
                >
                Add Post
            </MyButton>

            <PostsList 
                    posts={ sortedAndSelectedPosts } 
                    deletePost={ deletePost }/>

            {
                (isLoading) && <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        marginTop: '100px',
                                    }}>
                                    <MyLoader />
                                </div>
            }

            <Pagination 
                    totalCount={ totalCount } 
                    setPage={ setPage } 
                    page={ page }/>

            {
                error && <h1 style={{
                                textAlign: 'center',
                                color: 'tomato',  
                            }}>
                            { error }
                        </h1>
            }
        </div>
    );
};

export default Posts;