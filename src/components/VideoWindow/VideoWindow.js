import React from 'react';
import './VideoWindow.scss';

function VideoWindow(props) {
    return (
        <div>
            <div class="video__window">
                <video nocontrols id="video">
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                </video>
                <div class="video__controls">
                    <button class="video__button video__button--play">
                        <img src="./assets/images/play.svg" alt="" srcset=""/>
                    </button>
                    <div class="video__timeline">
                        <div class="video__progressbar"></div>
                        <div class="video__time">
                            <p class="video__currenttime">0:00/</p><p class="video__duration">4:04</p>
                        </div>
                    </div>
                    <div class="video__volumefullscreen">
                        <button class="video__button video__button--fullscreen">
                            <img src="./assets/images/fullscreen.svg" alt="" srcset=""/>
                        </button>
                        <button class="video__button video__button--volume">
                            <img src="./assets/images/volume_up.svg" alt="" srcset=""/>
                        </button>
                    </div>
                </div>
            </div>
            <h1 class="video__title">BMX Rampage: 2021 Highlights</h1>
        </div>
    );
}

export default VideoWindow;