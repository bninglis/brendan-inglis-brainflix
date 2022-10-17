import React from 'react';
import { useState,useRef } from 'react';
import './PostedComment.scss';
import "../../../styles/styles.scss";
import mohanMuruge from '../../../assets/images/Mohan-muruge.jpg';
import convertTime from "../../ConvertTime/ConvertTime";
import deleteIcon from "../../../assets/images/delete_FILL0_wght400_GRAD0_opsz24.svg"
import deleteIconFilled from "../../../assets/images/delete_FILL1_wght400_GRAD0_opsz24.svg"
import likeIcon from "../../../assets/images/thumb_up_FILL0_wght400_GRAD0_opsz24.svg"
import likeIconFilled from "../../../assets/images/thumb_up_FILL1_wght400_GRAD0_opsz24.svg"

import axios from 'axios';

// mouseover and mouseout events are for hovering over the delete or like button
function PostedComment({comment, id, name, timestamp, likes, BASE_URL, videoId, setCommentsState}) {
    const [likesCount, setLikesCount] = useState(Number(likes));
    // ref used to point to img to change src
    const deleteRef = useRef();
    const likeRef = useRef();
    const handleDeleteMouseOver = (()=>{
        deleteRef.current.src = deleteIconFilled
    })
    const handleDeleteMouseOut = (()=>{
        deleteRef.current.src = deleteIcon
    })
    const handleLikeMouseOver = (()=>{
        likeRef.current.src = likeIconFilled
    })
    const handleLikeMouseOut = (()=>{
        likeRef.current.src = likeIcon
    })
    const handleDeleteClick = (()=>{
        axios.delete(`${BASE_URL}/videos/${videoId}/comments/${id}`)
        .then((response)=>{
            axios.get(`${BASE_URL}/videos/${videoId}`)
            .then((response)=>{
                setCommentsState(response.data.comments)
            }).catch((error) => {
                alert(error.message)
            })
        })
        .catch((error) => {
            alert(error.message)
        })
    });

    const handleLikeClick = (()=>{
        axios.put(`${BASE_URL}/videos/${videoId}/comments/${id}`)
        .then((response)=>{
            axios.get(`${BASE_URL}/videos/${videoId}`)
            .then((response)=>{
                setLikesCount(likesCount+1)
            }).catch((error) => {
                alert(error.message)
            })
        })
        .catch((error) => {
            alert(error.message)
        })
    });
    

    const countLikes= (count)=>{
        if(count<1){
            return "No likes yet";
        } else if(count===1){
            return "1 like";
        } else {
            return `${Number(count).toLocaleString('en-US')} likes`;
        }
    }

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
                        <h3 className="likes__text">{countLikes(likesCount)}</h3>
                        <button className="likes__button" onMouseOver={handleLikeMouseOver} onMouseOut={handleLikeMouseOut} onClick={handleLikeClick} ><img className="likes__icon" src={likeIcon} ref={likeRef} alt="like icon"/></button>
                    </div>
                    <button className="delete__button actions__button" onMouseOver={handleDeleteMouseOver} onMouseOut={handleDeleteMouseOut} onClick={handleDeleteClick} >Delete<img className="delete__image" src={deleteIcon} ref={deleteRef} alt="delete icon" /></button>
                </div>
            </div>

        </li>
    );
}

export default PostedComment;