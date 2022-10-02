import './App.scss';
import './styles/styles.scss';
import Header from './components/Header/Header';
import Details from './components/Details/Details';
import VideoWindow from './components/VideoWindow/VideoWindow';
import Conversation from './components/Conversation/Conversation';
import Next from './components/Next/Next';

function App() {
  return (
    <div className="rootdiv">
      <Header />
      <VideoWindow />
      <Details />
      <Conversation />
      <Next />
    </div>
  );
}

export default App;
