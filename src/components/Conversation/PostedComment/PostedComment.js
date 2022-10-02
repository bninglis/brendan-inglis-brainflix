import React from 'react';
import './PostedComment.scss';
import "../../../styles/styles.scss";

function PostedComment(props) {
    return (
        <li className="posted-comment">
            <div className="posted-comment__sidebar">
                <img className="posted-comment__pfp pfp" src="blank" alt="user profile"/>
            </div>
            <div className="posted-comment__text">
                <div className="posted-comment__header">
                    <p className="posted-comment__name">Micheal Lyons</p>
                    <p className="posted-comment__date">1 year ago</p>
                </div>
                <p className="posted-comment__comment">They BLEW the ROOF off at their last event, once everyone started figuring out they were going. This is still simply the greatest opening of an event I have EVER witnessed.</p>
            </div>
        </li>
    );
}

export default PostedComment;