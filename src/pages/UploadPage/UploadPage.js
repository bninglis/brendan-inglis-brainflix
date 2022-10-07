import Header from "../../components/Header/Header";
import publishIcon from "../../assets/images/publish.svg";
import uploadPreview from "../../assets/images/Upload-video-preview.jpg";
import "./UploadPage.scss";

export default function UploadPage(){
    return (
        <>
            <Header />
            <div className="upload">
                <h1 className="upload__headline">Upload Video</h1>
                <form className="upload__form">
                    <label className="upload__label">VIDEO THUMBNAIL</label>
                    <img className="upload__thumbnail" src={uploadPreview} />
                    <label className="upload__label" htmlFor="videotitle">TITLE YOUR VIDEO</label>
                    <input className="upload__title" name="videotitle" placeholder="Add a title to your video"/>
                    <label className="upload__label" htmlFor="videodescription">ADD A VIDEO DESCRIPTION</label>
                    <textarea className="upload__description" name="videodescription" placeholder="Add a description to your video"/>
                    <button className="upload__publish" ><img src={publishIcon} alt="upload icon" className="button__icon icon" /><p className="button__text">PUBLISH</p></button>
                    <button className="upload__cancel" >CANCEL</button>
                </form>
            </div>
        </>
    )
}