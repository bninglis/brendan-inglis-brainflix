import './Next.scss';
import "../../styles/styles.scss";
import NextItem from './NextItem/NextItem'

function Next({videoList,selectVideo}) {
    return (
        <div className="next">
            <h3 className="next__subheader">NEXT VIDEOS</h3>
            <ul className="next__list">
                {videoList && videoList.map((video) => (
                    <NextItem video={video} key={video.id} selectVideo={selectVideo}/>
                ))}
            </ul>
        </div>
    );
}

export default Next;