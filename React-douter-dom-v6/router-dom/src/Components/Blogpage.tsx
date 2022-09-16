import React, {useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';

const Blogpage = () => {
    const [posts, setPost] = useState<any>([])
    console.log(useLocation())
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])

    return (
        <div>
            <h1>Blog </h1>
            <p>this is demo website Blog</p>
            <Link to={'/posts/new'}>Add new post</Link>
            {posts.map((post: {
                title: string;
                id: string
            }) => {
                return (
                    <Link key={post.id} to={`/posts/${post.id}`}>
                        <li>{post.title}</li>
                    </Link>
                )
            })}
        </div>
    );
};

export default Blogpage;