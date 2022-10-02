import React from 'react';
import './Comment.scss'
import "../../../styles/styles.scss";

function Comment(props) {
    return (
        <div className="comment">
        <img src="./assets/images/Mohan-muruge.jpg" alt="user profile" className="comment__pfp pfp"/>
        <form action="" className="comment__form">
            <label for="postinput" className="post__label post__label--input">JOIN THE CONVERSATION</label>
            <label for="posttextarea" className="post__label post__label--textarea">JOIN THE CONVERSATION</label>
            <input name="postinput" id="postInput" className="post__input" placeholder="Add a new comment"/>
            <textarea name="posttextarea" id="postTextArea" className="post__textarea" wrap="soft" placeholder="Add a new comment"/>
            <button className="comment__button"><img src="assets/images/add_comment.svg" alt="comment icon" className="button__icon icon"/><p className="button__text">COMMENT</p></button>
        </form>
    </div>
    );
}

export default Comment;