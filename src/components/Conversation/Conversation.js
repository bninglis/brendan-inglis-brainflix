import React, { useEffect, useState } from "react";
import "../../styles/styles.scss";
import Comment from "./Comment/Comment";
import "./Conversation.scss";
import PostedComment from "./PostedComment/PostedComment";

function Conversation({ comments, videoId, BASE_URL, API_KEY }) {
    const [commentsState, setCommentsState] = useState(comments);

    useEffect(() => { 
        window.scrollTo(0, 0);  // this component reliably triggers on every page mount so window.scrollTo() lives here
        setCommentsState(comments);
    }, [videoId, comments]);

    return (
        <div className='conversation'>
            <Comment
                videoId={videoId}
                BASE_URL={BASE_URL}
                API_KEY={API_KEY}
                commentsState={commentsState}
                setCommentsState={setCommentsState}
            />
            <ol className='discussion'>
                {commentsState.map((comment) => (
                    <PostedComment
                        comment={comment.comment}
                        id={comment.id}
                        name={comment.name}
                        timestamp={comment.timestamp}
                        likes={comment.likes}
                        BASE_URL={BASE_URL}
                        API_KEY={API_KEY}
                        commentsState={commentsState}
                        setCommentsState={setCommentsState}
                        videoId={videoId}
                        key={comment.id}
                    />
                ))}
            </ol>
        </div>
    );
}

export default Conversation;
