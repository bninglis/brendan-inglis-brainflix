import React from 'react';
import './PostedComment.scss';
import "../../../styles/styles.scss";
import mohanMuruge from '../../../assets/images/Mohan-muruge.jpg';
import convertTime from "../../ConvertTime/ConvertTime";

function PostedComment(props) {
    const {comment, id, name, timestamp} = props.comment;
    return (
        <li className="posted-comment" key={id}>
            <div className="posted-comment__sidebar">
                <div className="pfp posted-comment__pfp posted-comment__pfp--background">
                    <img className="posted-comment__pfp pfp" src={mohanMuruge} alt="user profile"/>
                </div>
            </div>
            <div className="posted-comment__text">
                <div className="posted-comment__header">
                    <p className="posted-comment__name">{name}</p>
                    <p className="posted-comment__date">{convertTime(timestamp)}</p>
                </div>
                <p className="posted-comment__comment">{comment}</p>
            </div>
        </li>
    );
}

export default PostedComment;