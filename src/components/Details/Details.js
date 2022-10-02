import React from 'react';
import './Details.scss'
import "../../styles/styles.scss";

function Details() {
    return (
        <div>
            <div className="details">
                <div className="details__static">
                    <p className="details__by">By Red Crow</p>
                    <p className="details__date">07/11/2021</p>
                </div>
                <div className="details__dynamic">
                    <div className="details__container">
                        <img src="./assets/images/views.svg" alt="" className="details__icon icon"/><p className="details__views">1,001,023</p>
                    </div>
                    <div className="details__container">
                        <img src="./assets/images/likes.svg" alt="" className="details__icon icon"/><p className="details__likes">110,985</p>
                    </div>
                </div>
            </div>
            <p className="details__description">On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title</p>
        </div>
    );
}

export default Details;