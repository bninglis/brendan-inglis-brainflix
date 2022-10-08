import Header from "../../components/Header/Header";
import publishIcon from "../../assets/images/publish.svg";
import uploadPreview from "../../assets/images/Upload-video-preview.jpg";
import "./UploadPage.scss";
import { useRef, useState } from "react";
import { useEffect } from "react";




export default function UploadPage(){
    const animationClass = " button__text--uploading";
    let publishButtonExtras = "";
    const classNameString = `button__text${publishButtonExtras}`;
    const [animate,setAnimate] = useState(null);
    useEffect(() => {

    },[publishButtonExtras])
    const submitHandler = (event)=> {
        event.preventDefault();
        publishButtonExtras = animationClass;
        publishRef.addClass()
        setAnimate("")
        console.log(event.target)
    };
    const publishRef = useRef();
    return (
        <>
            <Header />
            <div className="upload__container">
                <div className="upload">
                    <h1 className="upload__headline">Upload Video</h1>
                    <form className="upload__form" onSubmit={submitHandler}>
                        <div className="upload__data">
                            <div className="upload__file">
                                <label className="upload__label">VIDEO THUMBNAIL</label>
                                <img className="upload__thumbnail" src={uploadPreview} />
                            </div>
                            <div className="upload__fields">
                                <label className="upload__label" htmlFor="videotitle">TITLE YOUR VIDEO</label>
                                <input className="upload__title" name="videotitle" placeholder="Add a title to your video"/>
                                <label className="upload__label" htmlFor="videodescription">ADD A VIDEO DESCRIPTION</label>
                                <textarea className="upload__description" name="videodescription" placeholder="Add a description to your video"/>
                            </div>
                        </div>
                        <div className="upload__buttons">
                            <button className="upload__publish"><img src={publishIcon} alt="upload icon" className="button__icon icon" /><p ref={publishRef} className={classNameString}>PUBLISH</p></button>
                            <button className="upload__cancel" type="reset">CANCEL</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}