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
// "687ee809-6094-46bd-9c3f-d3e742be9ada"
// "f932b35e-f101-4b4d-8f90-995984602b7f"
// "72effae1-4373-4c60-9d76-3398551ed7c5"
// "801e42e5-0bec-4074-9343-7850bde3319e"
// "adb9317e-65d9-4dbd-88a3-c2e8fe00b0a6"

const SAMPLE_DETAILS = {
    "id": "84e96018-4022-434e-80bf-000ce4cd12b8",
    "title": "BMX Rampage: 2021 Highlights",
    "channel": "Red Cow",
    "image": "https://i.imgur.com/l2Xfgpl.jpg",
    "description": "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
    "views": "1,001,023",
    "likes": "110,985",
    "duration": "4:01",
    "video": "https://project-2-api.herokuapp.com/stream",
    "timestamp": 1626032763000,
    "comments": [
      {
        "id": "35bba08b-1b51-4153-ba7e-6da76b5ec1b9",
        "name": "Micheal Lyons",
        "comment": "They BLEW the ROOF off at their last event, once everyone started figuring out they were going. This is still simply the greatest opening of an event I have EVER witnessed.",
        "likes": 0,
        "timestamp": 1628522461000
      },
      {
        "id": "091de676-61af-4ee6-90de-3a7a53af7521",
        "name": "Gary Wong",
        "comment": "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
        "likes": 0,
        "timestamp": 1626359541000
      },
      {
        "id": "66b7d3c7-4023-47f1-a02c-520c9ca187a6",
        "name": "Theodore Duncan",
        "comment": "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Every time I see him I feel instantly happy! He’s definitely my favorite ever!",
        "likes": 0,
        "timestamp": 1626011132000
      }
    ]
  }

const BASE_URL = 'https://project-2-api.herokuapp.com';
const API_KEY = "687ee809-6094-46bd-9c3f-d3e742be9ada";
const LIST_CALL = `${BASE_URL}/videos?api_key=${API_KEY}`
const SAMPLE_ID = "84e96018-4022-434e-80bf-000ce4cd12b8"


export default function VideoPage() {
    const {id: videoId} = useParams();
    console.log('videoId:',videoId)
    const DETAILS_CALL = `${BASE_URL}/videos/${videoId}?api_key=${API_KEY}`
    const getVideo = () => {
        axios.get(`${BASE_URL}/videos/${videoId}?api_key=${API_KEY}`).then((response) =>{
            setSelectedVideoDetails(response.data)
        })
    }

    useEffect(() => {
        axios.get(LIST_CALL).then((response) => {
            setVideoList(response.data)
        })
        .then((response) => {
            console.log('videoList:',videoList)
        })
        getVideo();
    },[]);
    // initialize the App with the video from the mockups
    const [selectedVideoDetails, setSelectedVideoDetails] = useState(SAMPLE_DETAILS);
    const [selectedVideoId, setSelectedVideoId] = useState(null);
    const [videoList,setVideoList] = useState([]);
    // const videoDetailsList = videoDetailsArray;

    // event handler finds the video id and grabs boths the basic info and the video details
    const handleSelectVideo = (selectedId) => {
    // const foundVideoDetails = videoDetailsList.find((video) => selectedId === video.id);
    // setSelectedVideoDetails(foundVideoDetails);
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