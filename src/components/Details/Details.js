import { useState } from "react";
import "./Details.scss";
import "../../styles/styles.scss";
import viewsIcon from "../../assets/images/views.svg";
import likesIcon from "../../assets/images/likes.svg";
import convertTime from "../ConvertTime/ConvertTime";
import axios from "axios";

function Details({
    channel,
    description,
    likes,
    timestamp,
    title,
    views,
    videoId,
    BASE_URL,
}) {
    const [likesCount, setLikesCount] = useState(likes);
    const handleFave = (e) => {
        axios
            .put(`${BASE_URL}/videos/${videoId}`)
            .then((response) => {
                setLikesCount(response.data);
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    return (
        <div>
            <h1 className='details__title'>{title}</h1>
            <div className='details'>
                <div className='details__static'>
                    <p className='details__by'>By {channel}</p>
                    <p className='details__date'>{convertTime(timestamp)}</p>
                </div>
                <div className='details__dynamic'>
                    <div className='details__container'>
                        <img
                            src={viewsIcon}
                            alt=''
                            className='details__icon icon'
                        />
                        <p className='details__views'>{views}</p>
                    </div>
                    <div className='details__container'>
                        <button className='details__fave' onClick={handleFave}>
                            <img
                                src={likesIcon}
                                alt=''
                                className='details__icon icon'
                            />
                        </button>
                        <p className='details__likes'>{likesCount}</p>
                    </div>
                </div>
            </div>
            <p className='details__description'>{description}</p>
        </div>
    );
}

export default Details;
