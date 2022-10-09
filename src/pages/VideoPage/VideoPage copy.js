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
    let {id: paramsId} = useParams();
    const detailsCall = (id)=>{return `${BASE_URL}/videos/${id}?api_key=${API_KEY}`}
    const getVideo = (id) => {
        console.log("get video ran")
        axios.get(detailsCall(id)).then((response) =>{
            console.log("getVideo response:", response.data)
            setSelectedVideoDetails(response.data);
        }).then((response) => {
            console.log("getVideo selectedVideoDetails:", selectedVideoDetails)
        })
    }
    const [selectedVideoDetails, setSelectedVideoDetails] = useState(null);
    const [videoList,setVideoList] = useState([]);

    useEffect(() => {
        if (!paramsId) {
            console.log("No id if statement")
            axios.get(LIST_CALL).then((listResponse) => {
                setVideoList(listResponse.data.slice(1))
                return listResponse;
            }).then((response) => {
                const plantId = id ?? response.data[0].id;getVideo(response.data[0].id)
                })
        } else {
        axios.get(LIST_CALL).then((response) => {
            const videoId = paramsId ?? response.data[0].id;
            setVideoList(response.data)
        })
        getVideo(paramsId);
        console.log("getVideo selectedVideoDetails:", selectedVideoDetails)
        }
    },[]);
    

    const filteredArray = videoList.filter((video)=> video.id !== selectedVideoDetails.id)
    while(selectedVideoDetails === null){
        return (
            <>
            {console.log("Loading page")}
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
            <Details selectedVideoDetails={selectedVideoDetails}/>
            <Conversation comments={selectedVideoDetails.comments} paramsId={selectedVideoDetails.id} />
        </div>
        <div className="misc__aside">
            <Next videoList={filteredArray} />
        </div>
        </div>
    </div>
    );
}