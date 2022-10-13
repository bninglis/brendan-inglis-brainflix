import React from 'react';
import Comment from "./Comment/Comment";
import PostedComment from "./PostedComment/PostedComment";
import './Conversation.scss';
import "../../styles/styles.scss";
import { useState,useEffect } from 'react';

function Conversation({comments,videoId,BASE_URL,API_KEY}) {
    const [commentsState,setCommentsState] = useState([])
    const [commentsCount, setCommentsCount] = useState(0);
    const countComments = function () {
        if (comments.length === 1) {
            return '1 Comment';
        } else {
            return `${comments.length} Comments`;
        }
    }
    useEffect(()=>{
        setCommentsState(comments);
        setCommentsCount(comments.length);
    },[videoId,comments,commentsCount])

    return (
        <div className="conversation">
            <p className="conversation__count">{commentsCount} Comments</p>
            <Comment videoId={videoId} BASE_URL={BASE_URL} API_KEY={API_KEY} commentsState={commentsState} setCommentsState={setCommentsState} setCommentsCount={setCommentsCount} />
            <ol className="discussion">
                {commentsState.map((comment) => (
                    <PostedComment comment={comment.comment} id={comment.id} name={comment.name} timestamp={comment.timestamp} BASE_URL={BASE_URL} API_KEY={API_KEY} commentsState={commentsState} commentsCount={commentsCount} setCommentsState={setCommentsState} videoId={videoId} key={comment.id}/>
                ))}
            </ol>
        </div>
    );
}

export default Conversation;