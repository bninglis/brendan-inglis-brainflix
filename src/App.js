import './App.scss';
import './styles/styles.scss';
import VideoPage from './pages/VideoPage/VideoPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import UploadPage from './pages/UploadPage/UploadPage';
import {useState} from 'react';

export default function App() {
	const [test,setTest] = useState(null);
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<VideoPage test={test} setTest={setTest}/>} />
					<Route path="/videos/:id" element={<VideoPage />} />
					<Route path="/upload" element={<UploadPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</Router>
		</>
	)
}
