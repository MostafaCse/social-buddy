import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import PostDetail from '../PostDetail/PostDetail';

const Home = () => {
    const [post, setPost] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPost(data));
    }, [])

    // console.log(post);
    return (
        <div>
            {
                post.map(post => <PostDetail key={post.id} post={post}></PostDetail>)
            }
        </div>
    );
};

export default Home;