import "./VideoPage.scss";
import "../../styles/styles.scss";
import Header from "../../components/Header/Header";
import Details from "../../components/Details/Details";
import VideoWindow from "../../components/VideoWindow/VideoWindow";
import Conversation from "../../components/Conversation/Conversation";
import Next from "../../components/Next/Next";
import axios from "axios";
import { useParams } from "react-router-dom";
import PageLoad from "../../components/PageLoad/PageLoad";
import { useState, useEffect } from "react";

const BASE_URL = "http://localhost:8080";
const API_KEY = "687ee809-6094-46bd-9c3f-d3e742be9ada";
const LIST_CALL = `${BASE_URL}/videos`;

export default function VideoPage() {
    const [selectedVideoDetails, setSelectedVideoDetails] = useState(null);
    const [forceRender, setForceRender] = useState(0);
    const { id: paramsId } = useParams();
    // defined detailsCall as a function so that it could still have the id passed to it dynamically
    const detailsCall = (id) => {
        return `${BASE_URL}/videos/${id}`;
    };
    const [videoList, setVideoList] = useState([]);
    // getVideo was previously defined as a function because it was useful to reuse, the refactor removed that usefulness but it probably is still more legible
    const getVideo = (id) => {
        axios
            .get(detailsCall(id))
            .then((response) => {
                setSelectedVideoDetails(response.data);
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    useEffect(() => {
        axios
            .get(LIST_CALL)
            .then((listResponse) => {
                // defines videoId based on either param or the first video in the list
                const videoId = paramsId ?? listResponse.data[0].id;
                // sets videoList without the videoId of the current video
                setVideoList(
                    listResponse.data.filter((video) => video.id !== videoId)
                );
                getVideo(videoId);
            })
            .catch((error) => {
                alert(error.message);
            });
        // React desperately wants me to add a dependency here that would make this an infinite loop so I disabled the warning
        // eslint-disable-next-line
    }, [paramsId]);
    // displays loading message while http calls resolve
    if (selectedVideoDetails === null) {
        return (
            <>
                <PageLoad />
            </>
        );
    }
    return (
        <div className='rootdiv'>
            {}
            <Header />
            <VideoWindow
                poster={selectedVideoDetails.image}
                duration={selectedVideoDetails.duration}
            />
            <div className='misc'>
                <div className='misc__column'>
                    <Details
                        channel={selectedVideoDetails.channel}
                        description={selectedVideoDetails.description}
                        likes={selectedVideoDetails.likes}
                        timestamp={selectedVideoDetails.timestamp}
                        title={selectedVideoDetails.title}
                        views={selectedVideoDetails.views}
                        videoId={selectedVideoDetails.id}
                        BASE_URL={BASE_URL}
                    />
                    <Conversation
                        comments={selectedVideoDetails.comments}
                        videoId={
                            paramsId === null
                                ? selectedVideoDetails.id
                                : paramsId
                        }
                        BASE_URL={BASE_URL}
                        API_KEY={API_KEY}
                        forceRender={forceRender}
                        setForceRender={setForceRender}
                    />
                </div>
                <div className='misc__aside'>
                    <Next videoList={videoList} />
                </div>
            </div>
        </div>
    );
}
