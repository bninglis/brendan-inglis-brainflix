import React from 'react';
import './NextItem.scss';
import "../../../styles/styles.scss";

function NextItem(props) {
    return (
        <li className="next__item">
        <img src="./assets/images/l2Xfgpl.jpg" alt="varVIDEONAME thumbnail" className="next__thumbnail"/>
        <div className="next__text">
            <p className="next__title">BMX Rampage: 2021 Highlights</p>
            <p className="next__author">Red Crow</p>
        </div>
    </li>
    );
}

export default NextItem;