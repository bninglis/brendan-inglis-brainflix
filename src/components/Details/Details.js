import React from 'react';
import './Details.scss'
import "../../styles/styles.scss";
import viewsIcon from "../../assets/images/views.svg";
import likesIcon from "../../assets/images/likes.svg";
import convertTime from "../ConvertTime/ConvertTime";

function Details({channel, description, likes, timestamp, title, views}) {
    return (
        <div>
            <h1 className="details__title">{title}</h1>
            <div className="details">
                <div className="details__static">
                    <p className="details__by">By {channel}</p>
                    <p className="details__date">{convertTime(timestamp)}</p>
                </div>
                <div className="details__dynamic">
                    <div className="details__container">
                        <img src={viewsIcon} alt="" className="details__icon icon"/><p className="details__views">{views}</p>
                    </div>
                    <div className="details__container">
                        <img src={likesIcon} alt="" className="details__icon icon"/><p className="details__likes">{likes}</p>
                    </div>
                </div>
            </div>
            <p className="details__description">{description}</p>
        </div>
    );
}

export default Details;