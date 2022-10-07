import React from 'react';
import Comment from "./Comment/Comment";
import PostedComment from "./PostedComment/PostedComment";
import './Conversation.scss';
import "../../styles/styles.scss";

function Conversation({comments}) {

    const countComments = function () {
        if (comments.length === 1) {
            return '1 Comment';
        } else {
            return `${comments.length} Comments`;
        }
    }

    return (
        <div className="conversation">
            <p className="conversation__count">{countComments()}</p>
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