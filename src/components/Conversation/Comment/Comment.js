import React from 'react';

function Comment(props) {
    return (
        <div class="comment">
        <img src="./assets/images/Mohan-muruge.jpg" alt="profile picture" class="comment__pfp pfp"/>
        <form action="" class="comment__form">
            <label for="postinput" class="post__label post__label--input">JOIN THE CONVERSATION</label>
            <label for="posttextarea" class="post__label post__label--textarea">JOIN THE CONVERSATION</label>
            <input name="postinput" id="postInput" class="post__input" placeholder="Add a new comment"/>
            <textarea name="posttextarea" id="postTextArea" class="post__textarea" wrap="soft" placeholder="Add a new comment"/>
            <button class="comment__button"><img src="assets/images/add_comment.svg" alt="comment icon" class="button__icon icon"/><p class="button__text">COMMENT</p></button>
        </form>
    </div>
    );
}

export default Comment;