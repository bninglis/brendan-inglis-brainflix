import './Next.scss';
import "../../styles/styles.scss";
import NextItem from './NextItem/NextItem'

function Next({videoList}) {
    return (
        <div className="next">
            <h3 className="next__subheader">NEXT VIDEOS</h3>
            <ul className="next__list">
                {videoList && videoList.map((video) => (
                    <NextItem title={video.title} id={video.id} channel={video.channel} image={video.image} key={video.id} />
                ))}
            </ul>
        </div>
    );
}

export default Next;