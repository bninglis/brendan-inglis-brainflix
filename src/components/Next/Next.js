import React from 'react';
import './Next.scss';
import "../../styles/styles.scss";
import NextItem from './NextItem/NextItem'

function Next(props) {
    const {videoList,selectVideo} = props;
    return (
        <div className="next">
            <h3 className="next__subheader">NEXT VIDEOS</h3>
            <ul className="next__list">
                {videoList.map((video) => (
                    <NextItem video={video} key={video.id} selectVideo={selectVideo}/>
                ))}
            </ul>
        </div>
    );
}

export default Next;