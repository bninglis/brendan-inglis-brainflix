import React from 'react';
import './VideoWindow.scss';
import "../../styles/styles.scss";
import playIcon from "../../assets/images/play.svg";
import fullscreenIcon from "../../assets/images/fullscreen.svg";
import volumeIcon from "../../assets/images/volume_up.svg";

function VideoWindow(props) {
    return (
        <div>
            <div className="video__window">
                <video nocontrols id="video">
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                </video>
                <div className="video__controls">
                    <button className="video__button video__button--play">
                        <img src={playIcon} alt="play icon" />
                    </button>
                    <div className="video__timeline">
                        <div className="video__progressbar"></div>
                        <div className="video__time">
                            <p className="video__currenttime">0:00/</p><p className="video__duration">4:04</p>
                        </div>
                    </div>
                    <div className="video__volumefullscreen">
                        <button className="video__button video__button--fullscreen">
                            <img src={fullscreenIcon} alt="fullscreen icon" />
                        </button>
                        <button className="video__button video__button--volume">
                            <img src={volumeIcon} alt="volume icon" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoWindow;