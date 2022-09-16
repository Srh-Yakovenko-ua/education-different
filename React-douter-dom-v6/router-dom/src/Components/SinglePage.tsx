import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';

const SinglePage = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState<any>(null);

    const goBack = () => navigate(-1)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [id])


    return (
        <div>
            <button onClick={goBack}>Go Back</button>
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <Link to={`/posts/${id}/edit`}>
                        Edit this post
                    </Link>
                </>
            )}
        </div>
    );
};

export default SinglePage;