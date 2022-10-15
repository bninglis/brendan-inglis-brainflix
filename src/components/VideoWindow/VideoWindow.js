import "./VideoWindow.scss";
import "../../styles/styles.scss";
import playIcon from "../../assets/images/play.svg";
import pauseIcon from "../../assets/images/pause.svg";
import fullscreenIcon from "../../assets/images/fullscreen.svg";
import volumeIcon from "../../assets/images/volume_up.svg";
import videoFile from "../../assets/videos/brainstation-sample-video.mp4";
import { useState, useRef, useEffect } from "react";

function VideoWindow({ poster, propsDuration }) {
  const videoRef = useRef();
  const playImgRef = useRef();
  const [playState, setPlayState] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoProgress, setVideoProgress] = useState();
  const [volumePercentage, setVolumePercentage] = useState(50);

  // const changePlayIcon = (state) => {
  //   if (state === false) {
  const formatVideoTime = (time) => {
    let remainder = Math.floor(time % 60);
    return `${Math.floor(time / 60)}:${String(Math.floor(time % 60)).padStart(
      2,
      "0"
    )}`;
  };
  //   } else if (state === true) {

  //   }
  // };
  const handleLoadedMetadata = () => {
    setDuration(videoRef.current.duration);
  };

  const assignSliderDistance = (current, total) => {
    return Math.floor((current / total) * 100);
  };

  const videoLogic = (directive) => {
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

  window.setInterval(() => {
    setCurrentTime(videoRef.current?.currentTime);
    setVideoProgress(assignSliderDistance(currentTime, duration));
    setVolumePercentage(
      assignSliderDistance(
        videoRef.current?.seekable.end(videoRef.current?.seekable.length - 1),
        videoRef.current?.buffered.end
      )
    );
  }, 1000);

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
        >
          <source src={videoFile} type='video/mp4' />
          <p>Your browser doesn't support HTML video</p>
        </video>
        <div className='video__controls'>
          <button
            className='video__button video__button--play'
            onClick={() => videoLogic("play")}
          >
            <img src={playIcon} alt='play icon' ref={playImgRef} />
          </button>
          <div className='video__timeline'>
            <input
              type='range'
              value={videoProgress}
              className='video__slider slider'
              min='0'
              max='100'
            />
            <input
              type='range'
              className='video__slider video__slider--buffer slider'
            />
            <div className='video__time'>
              <p className='video__currenttime'>
                {`${formatVideoTime(currentTime)} / ${formatVideoTime(
                  duration
                )}`}
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
