import React from 'react';
import Comment from "./Comment/Comment";
import PostedComment from "./PostedComment/PostedComment";
import 'Conversation.scss';

function Conversation() {
    return (
        <div className="conversation">
            <p class="conversation__count">3 Comments</p>
            <Comment />
            <ol className="discussion">
                <PostedComment />
                <PostedComment />
                <PostedComment />
            </ol>
        </div>
    );
}

export default Conversation;