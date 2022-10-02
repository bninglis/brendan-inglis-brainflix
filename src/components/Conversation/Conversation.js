import React from 'react';
import Comment from "./Comment/Comment";
import PostedComment from "./PostedComment/PostedComment";
import './Conversation.scss';
import "../../styles/styles.scss";

function Conversation() {
    return (
        <div classNameName="conversation">
            <p className="conversation__count">3 Comments</p>
            <Comment />
            <ol classNameName="discussion">
                <PostedComment />
                <PostedComment />
                <PostedComment />
            </ol>
        </div>
    );
}

export default Conversation;