import React from 'react';
import './NextItem.scss';
import "../../../styles/styles.scss";

function NextItem(props) {
    const {title, id, channel, image} = props.video;
    const selectVideo = props.selectVideo;
    return (
    <li className="next__item" key={id} onClick={() => { selectVideo(id) }}>
        <img src={image} alt={title} className="next__thumbnail"/>
        <div className="next__text">
            <p className="next__title">{title}</p>
            <p className="next__author">{channel}</p>
        </div>
    </li>
    );
}

export default NextItem;