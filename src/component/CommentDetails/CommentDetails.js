import React from 'react';
import './CommentDetails.css';
import fakeImage from '../FakeData/FakeData';

const CommentDetails = (props) => {
    const { name, email, image, body } = props.details;
    return (
        <div className="details-highlight">
            <div className="image">
                <img src={fakeImage[image]} alt="" />
            </div>
            <div className="detail">
                <p>Name:-{name}</p>
                <p>Email:-{email}</p>
                <p>Body:-{body}</p>
            </div>
        </div>
    );
};

export default CommentDetails;