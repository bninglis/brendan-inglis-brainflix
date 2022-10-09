import Header from "../../components/Header/Header";
import publishIcon from "../../assets/images/publish.svg";
import uploadPreview from "../../assets/images/Upload-video-preview.jpg";
import "./UploadPage.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UploadSuccess from "../../components/UploadSuccess/UploadSuccess";





export default function UploadPage(){
    const [animate,setAnimate] = useState("button__text");
    const [loadClear,setLoadClear] = useState("blank")
    const [successModal,setSuccessModal] = useState("success")
    const [successContainer,setSuccessContainer] = useState("success__container")
    const navigate = useNavigate();
    const submitHandler = (event)=> {
        event.preventDefault();
        // starts the publish button animation
        setAnimate("button__text button__text--uploading")
        setSuccessContainer("success__container success__container--displayed")
        setTimeout(()=>{
            // makes the upload message visible
            setSuccessModal("success success--visible");
            setLoadClear("blank blank--load");
            setTimeout(()=>{
                navigate("/");
            },1000)
        },3000)
    };
    return (
        <>
        <UploadSuccess className="success" successModal={successModal} successContainer={successContainer} />
        <div className={loadClear}>
            <Header />
            <div className="upload__container">
                <div className="upload">
                    <h1 className="upload__headline">Upload Video</h1>
                    <form className="upload__form" onSubmit={submitHandler}>
                        <div className="upload__data">
                            <div className="upload__file">
                                <label className="upload__label">VIDEO THUMBNAIL</label>
                                <img className="upload__thumbnail" src={uploadPreview} alt="upload preview" />
                            </div>
                            <div className="upload__fields">
                                <label className="upload__label" htmlFor="videotitle">TITLE YOUR VIDEO</label>
                                <input className="upload__title" name="videotitle" placeholder="Add a title to your video"/>
                                <label className="upload__label" htmlFor="videodescription">ADD A VIDEO DESCRIPTION</label>
                                <textarea className="upload__description" name="videodescription" placeholder="Add a description to your video"/>
                            </div>
                        </div>
                        <div className="upload__buttons">
                            <button className="upload__publish"><img src={publishIcon} alt="publish icon" className="button__icon icon" /><p className={animate}>PUBLISH</p></button>
                            <button className="upload__cancel" type="reset">CANCEL</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}