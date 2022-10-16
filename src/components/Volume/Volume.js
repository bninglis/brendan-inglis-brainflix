import ReactSlider from "react-slider";
import { useRef } from "react";
import "./Volume.scss";
import Slider from "@mui/material/Slider";

export default function Volume({ video }) {
    const handleOnChange = (e) => {
        video.volume = e.target.value;
    };

    const volumeRef = useRef();
    return (
        <div>
            <div className='volume'>
                <div className='volume__container'>
                    {/* <ReactSlider
                        ref={volumeRef}
                        orientation='vertical'
                        className='volume__slider'
                        thumbClassName='volume-slider__thumb'
                        trackClassName='volume-slider__track'
                        disabled={false}
                        step={5}
                        pearling
                        minDistance={0.1}
                        defaultValue={50}
                    /> */}
                    {/* <input
                        type='range'
                        min='0'
                        max='100'
                        className='volume__slider'
                        onChange={handleOnChange}
                    /> */}
                </div>
            </div>
        </div>
    );
}
