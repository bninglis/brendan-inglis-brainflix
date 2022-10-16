import "./VideoWindow.scss";
import "../../styles/styles.scss";
import playIcon from "../../assets/images/play.svg";
import pauseIcon from "../../assets/images/pause.svg";
import fullscreenIcon from "../../assets/images/fullscreen.svg";
import volumeIcon from "../../assets/images/volume_up.svg";
import videoFile from "../../assets/videos/brainstation-sample-video.mp4";
import { useState, useRef, useEffect } from "react";
import ReactSlider from "react-slider";

function VideoWindow({ poster }) {
    const videoRef = useRef();
    const playImgRef = useRef();
    const sliderRef = useRef();
    const [playState, setPlayState] = useState(false);
    const [duration, setDuration] = useState(1);
    const [defaultValueToggle, setDefaultValueToggle] = useState(true);
    const [valueToggle, setValueToggle] = useState(true);
    const [onAfterChangeToggle, setOnAfterChangeToggle] = useState(false);
    const [onBeforeChangeToggle, setOnBeforeChangeToggle] = useState(true);
    const [onChangeToggle, setOnChangeToggle] = useState(false);
    const [bufferingTotal, setBufferingTotal] = useState(0);
    const [sliderValues, setSliderValues] = useState([0, 0]);

    // const changePlayIcon = (state) => {
    //   if (state === false) {
    const formatVideoTime = (time) => {
        return `${Math.floor(time / 60)}:${String(
            Math.floor(time % 60)
        ).padStart(2, "0")}`;
    };
    //   } else if (state === true) {

    //   }
    // };
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
            // else {
            //     setBufferingTotal(bufferingTotal);
            // }
        }
    };

    window.setInterval(() => {
        const newPlayhead = (videoRef.current?.currentTime / duration) * 100;
        updateBuffered();
        const newBuffer = (bufferingTotal / duration) * 100;
        setSliderValues([newPlayhead, newBuffer]);
    }, 1000);

    // const handleSliderClick = (e) => {
    //     videoRef.current?.pause();
    //     console.log(e.target.value);
    //     e.target.defaultValue = sliderValues;
    //     e.target.onChange = handleSliderChange;
    // };
    const handleAfterChange = (e) => {
        e.target.value = sliderValues;
        videoRef.current?.play();
    };

    const handleSliderChange = (e) => {
        e.target.onAfterChange = handleAfterChange;
        setSliderValues([e.target.value, sliderValues[1]]);
        videoRef.current?.fastSeek(e.target.value);
    };

    const handleSliderClick = (e) => {};

    const handleBeforeChange = (e) => {
        videoRef.current?.pause();
        console.log(e.target);
        // e.target.defaultValue = sliderValues;
        e.target.onChange = handleSliderChange;
        setSliderValues(e.target.value);
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
                    onChange={onChangeToggle}
                    onAfterChange={false}
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
                            className='video-slider'
                            thumbClassName='video-slider__thumb'
                            trackClassName='video-slider__track'
                            disabled={false}
                            // onChange={onChangeToggle}
                            step={1}
                            pearling
                            minDistance={0.1}
                            defaultValue={
                                onChangeToggle === true
                                    ? undefined
                                    : sliderValues
                            }
                            value={
                                onChangeToggle === true
                                    ? sliderValues
                                    : undefined
                            }
                            onChange={
                                onChangeToggle === true
                                    ? handleSliderChange
                                    : undefined
                            }
                            onBeforeChange={
                                onBeforeChangeToggle === true
                                    ? handleBeforeChange
                                    : undefined
                            }
                            onAfterChange={
                                onAfterChangeToggle === true
                                    ? handleAfterChange
                                    : undefined
                            }
                        />
                        {/* <input
              type='range'
              value={videoProgress}
              className='video__slider video__slider--playhead slider'
              min='1'
              max='100'
  />*/}

                        <div className='video__time'>
                            <p className='video__currenttime'>
                                {`${formatVideoTime(
                                    videoRef.current?.currentTime
                                )} / ${formatVideoTime(duration)}`}
                            </p>
                        </div>
                    </div>
                    <div className='video__volumefullscreen'>
                        <button className='video__button video__button--fullscreen'>
                            <img src={fullscreenIcon} alt='fullscreen icon' />
                        </button>
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
