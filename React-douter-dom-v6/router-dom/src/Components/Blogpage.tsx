import React, {useEffect, useState} from 'react';
import {Link, useLocation, useSearchParams} from 'react-router-dom';
import {isBooleanObject} from 'util/types';

const Blogpage = () => {
    const [posts, setPost] = useState<any>([])
    console.log(useLocation())

    const [searchParams, setSearchParams] = useSearchParams()
    const postQuery = searchParams.get('post') || '';
    const latest = searchParams.has('latest');

    const startsFrom = latest ? 80 : 1;

    const handleSubmit = (e: { target: any; preventDefault: () => void; }) => {
        e.preventDefault()
        const form = e.target

        const query = form.search.value;
        const isLatest = form.latest.checked

        const params : any = {}
        if(query.length) params.post = query
        if(isLatest) params.latest = true
        setSearchParams(params)
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])

    return (
        <div>
            <h1>Blog </h1>
            <form autoComplete={'off'} onSubmit={handleSubmit}>
                <input type="search" name={'search'}/>
                <label htmlFor="">
                    <input type="checkbox" name={'latest'}/>
                </label>
                <input type="submit" value={'Search'}/>
            </form>

            <Link to={'/posts/new'}>Add new post</Link>
            {posts.filter((post: {
                id: number;
                title: string | string[]; }) => post.title.includes(postQuery) && post.id >= startsFrom).map((post: {
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