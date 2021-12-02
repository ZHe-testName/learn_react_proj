import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import useFetching from '../hooks/useFetching';
import MyLoader from '../UI/my_loader/MyLoader';

const PostIdPage = () => {
    //хук используется для получения 
    //динамических парамеиров в url адресе 
    const {id} = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const [isLoading, fetchingPost] = useFetching(async () => {
        const responce = await PostService.getById(id);

        setPost(responce.data);
    });

    const [isCommentsLoading, fetchingComments] = useFetching(async () => {
        const responce = await PostService.getComentsByPostId(id);

        setComments(responce.data);
    });

    useEffect(() => {
        fetchingPost();
        fetchingComments();
    }, []);

    return (
        <div>
            <h1>Im post {id}</h1>

            {
                !isLoading
                    ?
                    <div>
                        {post.title}
                    </div>
                    :
                    <MyLoader />
            }

            <h2>Comments</h2>

            {
                !isCommentsLoading
                    ?
                    <ul>
                        {
                            comments.map(c => <li key={c.id}>{c.body}</li>)
                        }
                    </ul>
                    :
                    <MyLoader />
            }
        </div>
    );
};

export default PostIdPage;