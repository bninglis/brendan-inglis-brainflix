import React from 'react';
import { useRef } from 'react';
import './PostedComment.scss';
import "../../../styles/styles.scss";
import mohanMuruge from '../../../assets/images/Mohan-muruge.jpg';
import convertTime from "../../ConvertTime/ConvertTime";
import likesIcon from "../../../assets/images/thumb_up_FILL0_wght400_GRAD0_opsz24.svg"
import likesIconFilled from "../../../assets/images/thumb_up_FILL1_wght400_GRAD0_opsz24.svg"
import deleteIcon from "../../../assets/images/delete_FILL0_wght400_GRAD0_opsz24.svg"
import deleteIconFilled from "../../../assets/images/delete_FILL1_wght400_GRAD0_opsz24.svg"

function PostedComment(props) {
    const likesRef = useRef();
    const deleteRef = useRef();
    const handleLikesMouseOver = ((event)=>{
        likesRef.current.src = likesIconFilled
    })
    const handleLikesMouseOut = ((event)=>{
        likesRef.current.src = likesIcon
    })
    const handleDeleteMouseOver = ((event)=>{
        deleteRef.current.src = deleteIconFilled
    })
    const handleDeleteMouseOut = ((event)=>{
        deleteRef.current.src = deleteIcon
    })
    const {comment, id, name, timestamp} = props.comment;
    return (
        <li className="posted-comment" key={id}>
            <div className="posted-comment__sidebar">
                <div className="pfp posted-comment__pfp posted-comment__pfp--background">
                    <img className="posted-comment__pfp pfp" src={mohanMuruge} alt="user profile"/>
                </div>
            </div>
            <div className="posted-comment__text">
                <div className="posted-comment__header">
                    <p className="posted-comment__name">{name}</p>
                    <p className="posted-comment__date">{convertTime(timestamp)}</p>
                </div>
                <p className="posted-comment__comment">{comment}</p>
                <div className="posted-comment__actions">
                <div className="likes">
                    <p className="likes__text">No likes yet</p>
                    <button className="likes__button actions__button" onMouseOver={handleLikesMouseOver} onMouseOut={handleLikesMouseOut}><img className="likes__image" src={likesIcon} ref={likesRef} /></button>
                </div>
                <button className="delete__button actions__button" onMouseOver={handleDeleteMouseOver} onMouseOut={handleDeleteMouseOut} >Delete<img className="delete__image" src={deleteIcon} ref={deleteRef} /></button>
            </div>
            </div>

        </li>
    );
}

export default PostedComment;