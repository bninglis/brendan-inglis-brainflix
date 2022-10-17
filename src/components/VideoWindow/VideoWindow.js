import "./VideoWindow.scss";
import "../../styles/styles.scss";
import playIcon from "../../assets/images/play.svg";
import pauseIcon from "../../assets/images/pause.svg";
import fullscreenIcon from "../../assets/images/fullscreen.svg";
import volumeIcon from "../../assets/images/volume_up.svg";
import videoFile from "../../assets/videos/test.mp4";
import { useState, useRef, useEffect } from "react";
import ReactSlider from "react-slider";

// could not get the volume functions to work properly in the time available

function VideoWindow({ poster }) {
    const videoRef = useRef();
    const playImgRef = useRef();
    const sliderRef = useRef();
    const [playState, setPlayState] = useState(false);
    const [duration, setDuration] = useState(1);
    const [bufferingTotal, setBufferingTotal] = useState(0);
    const [sliderValues, setSliderValues] = useState([0, 0]);

    // formats time to strings for display
    const formatVideoTime = (time) => {
        return `${Math.floor(time / 60)}:${String(
            Math.floor(time % 60)
        ).padStart(2, "0")}`;
    };

    // loads video duration from the metadata to the player
    const handleLoadedMetadata = () => {
        setDuration(videoRef.current.duration);
    };

    // adds functionality to the play/pause button
    const playButton = (directive) => {
        if (directive === "play") {
            if (playState === false) {
                videoRef.current.play();
                playImgRef.current.src = pauseIcon;
                setPlayState(true);
            } else if (playState === true) {
                videoRef.current.pause();
                playImgRef.current.src = playIcon;
                setPlayState(false);
            }
        }
    };

    // originally I added all the buffered ranges together to show buffered percentage and then output that to the slider
    // then I realised that no one cares how much of the video is buffered if it's at the end so I just output the first range

    // const updateBuffered = () => {
    //     if (videoRef.current?.buffered !== undefined) {
    //         const bufferedTimeRanges = videoRef.current?.buffered;
    //         const ranges = bufferedTimeRanges.length;
    //         let totalBufferedTime = 0;
    //         for (let i = 0; i < ranges; i++) {
    //             totalBufferedTime =
    //                 totalBufferedTime +
    //                 (bufferedTimeRanges.end(i) - bufferedTimeRanges.start(i));
    //         }
    //         if (totalBufferedTime > bufferingTotal && !!totalBufferedTime) {
    //             setBufferingTotal(totalBufferedTime);
    //         }
    //     }
    // };

    const updateBuffered = () => {
        if (videoRef.current?.buffered !== undefined) {
            const bufferedTimeRanges = videoRef.current?.buffered;
            setBufferingTotal(
                bufferedTimeRanges.end(0) - bufferedTimeRanges.start(0)
            );
        }
    };

    // updates the slider to reflect the current time in the video and the percentage of the video buffered
    window.setInterval(() => {
        const newPlayhead = (videoRef.current?.currentTime / duration) * 100;
        updateBuffered();
        const newBuffer = (bufferingTotal / duration) * 100;
        setSliderValues([newPlayhead, newBuffer]);
    }, 1000);

    // onChange handler allows for scrubbing the video
    const handleSliderChange = (e) => {
        let currentPlayhead =
            (sliderRef.current.state.value[0] / 100) * duration;
        setSliderValues([currentPlayhead, sliderValues[1]]);
        videoRef.current.currentTime = currentPlayhead;
    };

    const handleFullscreen = (e) => {
        videoRef.current.requestFullscreen();
    };

    const handleEnded = (e) => {
        e.target.load();
        playButton("play");
    };

    return (
        <div>
            <div className='video__window'>
                <video
                    controls={false}
                    autoPlay={false}
                    id='video'
                    poster={poster}
                    ref={videoRef}
                    onLoadedMetadata={handleLoadedMetadata}
                    onEnded={handleEnded}
                    preload=''
                >
                    <source src={videoFile} type='video/mp4' />
                    <p>Your browser doesn't support HTML video</p>
                </video>
                <div className='video__controls'>
                    <button
                        className='video__button video__button--play'
                        onClick={() => playButton("play")}
                    >
                        <img src={playIcon} alt='play icon' ref={playImgRef} />
                    </button>
                    <div className='video__timeline'>
                        {/* input range was nto working so used this package, probably other better options out there but I needed to start with something */}

                        <ReactSlider
                            ref={sliderRef}
                            className='vslider'
                            thumbClassName='vslider__thumb'
                            trackClassName='vslider__track'
                            disabled={false}
                            onChange={handleSliderChange}
                            step={5}
                            pearling
                            minDistance={0.1}
                            defaultValue={0}
                            value={sliderValues}
                        />
                        <div className='video__time'>
                            <p className='video__currenttime'>
                                {`${formatVideoTime(
                                    videoRef.current?.currentTime
                                )} / ${formatVideoTime(duration)}`}
                            </p>
                        </div>
                    </div>
                    <div className='video__volumefullscreen'>
                        <button
                            className='video__button video__button--fullscreen'
                            onClick={handleFullscreen}
                        >
                            <img src={fullscreenIcon} alt='fullscreen icon' />
                        </button>
                        {/* Started working on the volume, found it wasn't working and realised I didn't have enough time to do a deep dive debug so I had to just scrap it */}
                        <button className='video__button video__button--volume'>
                            <img src={volumeIcon} alt='volume icon' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoWindow;
