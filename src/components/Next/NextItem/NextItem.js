import "./NextItem.scss";
import "../../../styles/styles.scss";
import { Link } from "react-router-dom";
// {title,id,channel,image,selectVideo}
function NextItem({ title, id, channel, image }) {
  // simple info pulled from the list of videos.json with the current video filtered from it
  return (
    <li key={id}>
      <Link to={`/videos/${id}`}>
        <div className='next__item'>
          <img src={image} alt={title} className='next__thumbnail' />
          <div className='next__text'>
            <p className='next__title'>{title}</p>
            <p className='next__author'>{channel}</p>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default NextItem;
