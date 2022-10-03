import React from 'react';
import Comment from "./Comment/Comment";
import PostedComment from "./PostedComment/PostedComment";
import './Conversation.scss';
import "../../styles/styles.scss";

function Conversation(props) {
    const comments = props.selectedVideoDetails.comments;
    return (
        <div className="conversation">
            <p className="conversation__count">3 Comments</p>
            <Comment />
            <ol className="discussion">
                {comments.map((comment) => (
                    <PostedComment comment={comment} key={comment.id}/>
                ))}
            </ol>
        </div>
    );
}

export default Conversation;