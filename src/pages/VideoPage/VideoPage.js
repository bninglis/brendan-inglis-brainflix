import "./VideoPage.scss"
import "../../styles/styles.scss"
import Header from '../../components/Header/Header';
import Details from '../../components/Details/Details';
import VideoWindow from '../../components/VideoWindow/VideoWindow';
import Conversation from '../../components/Conversation/Conversation';
import Next from '../../components/Next/Next';
import {useState} from 'react';
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import PageLoad from '../../components/PageLoad/PageLoad'
// "687ee809-6094-46bd-9c3f-d3e742be9ada"
// "f932b35e-f101-4b4d-8f90-995984602b7f"
// "72effae1-4373-4c60-9d76-3398551ed7c5"
// "801e42e5-0bec-4074-9343-7850bde3319e"
// "adb9317e-65d9-4dbd-88a3-c2e8fe00b0a6"

const BASE_URL = 'https://project-2-api.herokuapp.com';
const API_KEY = "687ee809-6094-46bd-9c3f-d3e742be9ada";
const LIST_CALL = `${BASE_URL}/videos?api_key=${API_KEY}`


export default function VideoPage() {
    const [selectedVideoDetails, setSelectedVideoDetails] = useState(null);
    const {id: paramsId} = useParams();
    // defined detailsCall as a function so that it could still have the id passed to it dynamically
    const detailsCall = (id)=>{return `${BASE_URL}/videos/${id}?api_key=${API_KEY}`}
    const [videoList,setVideoList] = useState([]);
    // getVideo was previously defined as a function because it was useful to reuse, the refactor removed that usefulness but it probably is still more legible
    const getVideo = (id) => {
        axios.get(detailsCall(id)).then((response) =>{
            setSelectedVideoDetails(response.data);
        })
        .catch((error) => {
            alert(error.message)
        })
    }

    useEffect(() => {
        axios.get(LIST_CALL)
        .then((listResponse) => {
            // defines videoId based on either param or the first video in the list
            const videoId = paramsId ?? listResponse.data[0].id;
            // sets videoList without the videoId of the current video
            setVideoList(listResponse.data.filter((video)=> video.id !== videoId))
            getVideo(videoId);
        })
        .catch((error) => {
            alert(error.message)
        })
        // React desperately wants me to add a dependency here that would make this an infinite loop so I disabled the warning
        // eslint-disable-next-line 
    },[paramsId]);
// displays loading message while http calls resolve
    if(selectedVideoDetails === null){
        return (
            <>
                <PageLoad/>
            </>
        )
    }
    return (
    <div className="rootdiv">{}
        <Header />
        <VideoWindow poster={selectedVideoDetails.image} duration={selectedVideoDetails.duration}/>
        <div className="misc">
        <div className="misc__column">
            <Details channel={selectedVideoDetails.channel} description={selectedVideoDetails.description} likes={selectedVideoDetails.likes} timestamp={selectedVideoDetails.timestamp} title={selectedVideoDetails.title} views={selectedVideoDetails.views} />
            <Conversation comments={selectedVideoDetails.comments} videoId={selectedVideoDetails.id} BASE_URL={BASE_URL} API_KEY={API_KEY} />
        </div>
        <div className="misc__aside">
            <Next videoList={videoList} />
        </div>
        </div>
    </div>
    );
}