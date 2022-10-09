import React from 'react';
import Comment from "./Comment/Comment";
import PostedComment from "./PostedComment/PostedComment";
import './Conversation.scss';
import "../../styles/styles.scss";
import { useState,useEffect } from 'react';

function Conversation({comments,videoId,BASE_URL,API_KEY}) {
    const [commentsState,setCommentsState] = useState([])
    const countComments = function () {
        if (comments.length === 1) {
            return '1 Comment';
        } else {
            return `${comments.length} Comments`;
        }
    }
    useEffect(()=>{
        setCommentsState(comments);
    },[])

    return (
        <div className="conversation">
            <p className="conversation__count">{countComments()}</p>
            <Comment videoId={videoId} BASE_URL={BASE_URL} API_KEY={API_KEY} commentsState={commentsState} setCommentsState={setCommentsState} />
            <ol className="discussion">
                {commentsState.map((comment) => (
                    <PostedComment comment={comment} key={comment.id}/>
                ))}
            </ol>
        </div>
    );
}

export default Conversation;