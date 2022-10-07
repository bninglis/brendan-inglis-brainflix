import './NextItem.scss';
import "../../../styles/styles.scss";
// {title,id,channel,image,selectVideo}
function NextItem({video, selectVideo}) {
    const {title,id,channel,image} = video;
    // simple info pulled from the list of videos.json with the current video filtered from it
    return (
    <li className="next__item" key={id} onClick={() => { selectVideo(id) }}>
        <img src={image} alt={title} className="next__thumbnail"/>
        <div className="next__text">
            <p className="next__title">{title}</p>
            <p className="next__author">{channel}</p>
        </div>
    </li>
    );
}

export default NextItem;