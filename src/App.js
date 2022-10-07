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
// initialize the App with the video from the mockups
  const [selectedVideoDetails, setSelectedVideoDetails] = useState(videoDetailsArray[0]);
  const videoList = videoArray;
  const videoDetailsList = videoDetailsArray;

  // event handler finds the video id and grabs boths the basic info and the video details
  const handleSelectVideo = (selectedId) => {
    const foundVideo = videoList.find((video) => selectedId === video.id);
    const foundVideoDetails = videoDetailsList.find((video) => selectedId === video.id);
    setSelectedVideoDetails(foundVideoDetails);
  }
// put a list to the next videos that has the mounted video filtered from it 
  const filteredArray = videoList.filter((video)=> video.id !== selectedVideoDetails.id)

  return (
    <div className="rootdiv">
      <Header />
      <VideoWindow poster={selectedVideoDetails.image} duration={selectedVideoDetails.duration}/>
      <div className="misc">
        <div className="misc__column">
          <Details selectedVideoDetails={selectedVideoDetails}/>
          <Conversation comments={selectedVideoDetails.comments}/>
        </div>
        <div className="misc__aside">
          <Next videoList={filteredArray} selectVideo={handleSelectVideo} />
        </div>
      </div>
    </div>
  );
}

export default App;
