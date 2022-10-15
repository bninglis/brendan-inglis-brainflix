import React, { useEffect, useState, useCallback } from "react";
import "../../styles/styles.scss";
import Comment from "./Comment/Comment";
import "./Conversation.scss";
import PostedComment from "./PostedComment/PostedComment";

function Conversation({
  comments,
  videoId,
  BASE_URL,
  API_KEY,
  forceRender,
  setForceRender,
}) {
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  const [commentsState, setCommentsState] = useState(comments);

  useEffect(() => {}, [comments.length]);
  return (
    <div className='conversation'>
      <Comment
        videoId={videoId}
        BASE_URL={BASE_URL}
        API_KEY={API_KEY}
        commentsState={commentsState}
        setCommentsState={setCommentsState}
        forceUpdate={forceUpdate}
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
