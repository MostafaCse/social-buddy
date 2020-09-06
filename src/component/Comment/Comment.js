import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import CommentDetails from '../CommentDetails/CommentDetails';

const Comment = () => {
    const { id } = useParams();
    const [comment, setComment] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then(res => res.json())
            .then(data => setComment(data))
    }, [id]);

    //add extra property to handle image 
    let imageValue = 0;
    comment.map(pd => {
        pd.image = imageValue;
        imageValue++;
        return pd;
    })
    return (
        comment.map(
            comment => <CommentDetails key={comment.id} details={comment}></CommentDetails>)
    );

}
export default Comment;