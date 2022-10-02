import React from 'react';
import './VideoWindow.scss';
import "../../styles/styles.scss";

function VideoWindow(props) {
    return (
        <div>
            <div className="video__window">
                <video nocontrols id="video">
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                </video>
                <div className="video__controls">
                    <button className="video__button video__button--play">
                        <img src="./assets/images/play.svg" alt="" srcset=""/>
                    </button>
                    <div className="video__timeline">
                        <div className="video__progressbar"></div>
                        <div className="video__time">
                            <p className="video__currenttime">0:00/</p><p className="video__duration">4:04</p>
                        </div>
                    </div>
                    <div className="video__volumefullscreen">
                        <button className="video__button video__button--fullscreen">
                            <img src="./assets/images/fullscreen.svg" alt="" srcset=""/>
                        </button>
                        <button className="video__button video__button--volume">
                            <img src="./assets/images/volume_up.svg" alt="" srcset=""/>
                        </button>
                    </div>
                </div>
            </div>
            <h1 className="video__title">BMX Rampage: 2021 Highlights</h1>
        </div>
    );
}

export default VideoWindow;