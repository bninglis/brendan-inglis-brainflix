import './App.scss';
import './styles/styles.scss';
import Header from './components/Header/Header';
import Details from './components/Details/Details';
import VideoWindow from './components/VideoWindow/VideoWindow';
import Conversation from './components/Conversation/Conversation';
import Next from './components/Next/Next';
import videoArray from './data/videos.json'
import videoDetailsArray from './data/video-details.json';
import {useState} from 'react';

function App() {

  const [selectedVideo, setSelectedVideo] = useState(videoArray[0]);
  const [selectedVideoDetails, setSelectedVideoDetails] = useState(videoDetailsArray[0]);
  const videoList = videoArray;
  const videoDetailsList = videoDetailsArray;

  
  const handleSelectVideo = (selectedId) => {
    const foundVideo = videoList.find((video) => selectedId === video.id);
    const foundVideoDetails = videoDetailsList.find((video) => selectedId === video.id);
    setSelectedVideo(foundVideo);
    setSelectedVideoDetails(foundVideoDetails);
  }

  const filteredArray = videoList.filter((video)=> video.id !== selectedVideo.id)

  return (
    <div className="rootdiv">
      <Header />
      <VideoWindow selectedVideo={selectedVideo} selectedVideoDetails={selectedVideoDetails}/>
      <div className="misc">
        <div className="misc__column">
          <Details selectedVideoDetails={selectedVideoDetails}/>
          <Conversation selectedVideoDetails={selectedVideoDetails}/>
        </div>
        <div className="misc__aside">
          <Next videoList={filteredArray} selectVideo={handleSelectVideo} />
        </div>
      </div>
    </div>
  );
}

export default App;
