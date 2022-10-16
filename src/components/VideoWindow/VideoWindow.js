import "./VideoWindow.scss";
import "../../styles/styles.scss";
import playIcon from "../../assets/images/play.svg";
import pauseIcon from "../../assets/images/pause.svg";
import fullscreenIcon from "../../assets/images/fullscreen.svg";
import volumeIcon from "../../assets/images/volume_up.svg";
import videoFile from "../../assets/videos/test.mp4";
import { useState, useRef } from "react";
import ReactSlider from "react-slider";
import Volume from "../Volume/Volume";

// could not get the volume functions 

function VideoWindow({ poster }) {
    const videoRef = useRef();
    const playImgRef = useRef();
    const sliderRef = useRef();
    const [playState, setPlayState] = useState(false);
    const [duration, setDuration] = useState(1);
    const [bufferingTotal, setBufferingTotal] = useState(0);
    const [sliderValues, setSliderValues] = useState([0, 0]);

    // const volumeRef = useRef();
    // const [volumeValue, setVolumeValue] = useState(50);
    // const [onChangeValue, setOnChangeValue] = useState(false);

    // 
    const formatVideoTime = (time) => {
        return `${Math.floor(time / 60)}:${String(
            Math.floor(time % 60)
        ).padStart(2, "0")}`;
    };

    const handleLoadedMetadata = () => {
        setDuration(videoRef.current.duration);
    };

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

    const updateBuffered = () => {
        if (videoRef.current?.buffered !== undefined) {
            const bufferedTimeRanges = videoRef.current?.buffered;
            const ranges = bufferedTimeRanges.length;
            let totalBufferedTime = 0;
            for (let i = 0; i < ranges; i++) {
                totalBufferedTime =
                    totalBufferedTime +
                    (bufferedTimeRanges.end(i) - bufferedTimeRanges.start(i));
            }
            if (totalBufferedTime > bufferingTotal && !!totalBufferedTime) {
                setBufferingTotal(totalBufferedTime);
            }
        }
    };

    window.setInterval(() => {
        const newPlayhead = (videoRef.current?.currentTime / duration) * 100;
        updateBuffered();
        const newBuffer = (bufferingTotal / duration) * 100;
        setSliderValues([newPlayhead, newBuffer]);
    }, 1000);

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
                        <button className='video__button video__button--volume'>
                            <img src={volumeIcon} alt='volume icon' />
                        </button>
                        {/* <Volume video={videoRef} /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoWindow;
