import React from 'react';
import { useRef } from 'react';
import './PostedComment.scss';
import "../../../styles/styles.scss";
import mohanMuruge from '../../../assets/images/Mohan-muruge.jpg';
import convertTime from "../../ConvertTime/ConvertTime";
import deleteIcon from "../../../assets/images/delete_FILL0_wght400_GRAD0_opsz24.svg"
import deleteIconFilled from "../../../assets/images/delete_FILL1_wght400_GRAD0_opsz24.svg"
import axios from 'axios';

// mouseover and mouseout events are for hovering over the delete button
function PostedComment({comment, id, name, timestamp, BASE_URL, API_KEY, videoId, commentsState, setCommentsState}) {
    // ref used to point to img to change src
    const deleteRef = useRef();
    const handleDeleteMouseOver = (()=>{
        deleteRef.current.src = deleteIconFilled
    })
    const handleDeleteMouseOut = (()=>{
        deleteRef.current.src = deleteIcon
    })
    const handleDeleteClick = (()=>{
        axios.delete(`${BASE_URL}/videos/${videoId}/comments/${id}?api_key=${API_KEY}`)
        .then((response)=>{
            setCommentsState(commentsState.filter(comment => comment.id !== response.data.id))
        })
        .catch((error) => {
            alert(error.message)
        })
    });

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
                    <button className="delete__button actions__button" onMouseOver={handleDeleteMouseOver} onMouseOut={handleDeleteMouseOut} onClick={handleDeleteClick} >Delete<img className="delete__image" src={deleteIcon} ref={deleteRef} alt="delete icon" /></button>
                </div>
            </div>

        </li>
    );
}

export default PostedComment;