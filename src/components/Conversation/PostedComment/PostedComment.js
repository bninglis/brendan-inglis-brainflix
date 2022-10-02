import React from 'react';
import './PostedComment.scss';

function PostedComment(props) {
    return (
        <li class="posted-comment">
            <div class="posted-comment__sidebar">
                <img class="posted-comment__pfp pfp" src="blank"/>
            </div>
            <div class="posted-comment__text">
                <div class="posted-comment__header">
                    <p class="posted-comment__name">Micheal Lyons</p>
                    <p class="posted-comment__date">1 year ago</p>
                </div>
                <p class="posted-comment__comment">They BLEW the ROOF off at their last event, once everyone started figuring out they were going. This is still simply the greatest opening of an event I have EVER witnessed.</p>
            </div>
        </li>
    );
}

export default PostedComment;