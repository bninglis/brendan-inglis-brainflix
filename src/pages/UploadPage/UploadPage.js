import Header from "../../components/Header/Header";
import publishIcon from "../../assets/images/publish.svg";
import uploadPreview from "../../assets/images/Upload-video-preview.jpg";
import "./UploadPage.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UploadSuccess from "../../components/UploadSuccess/UploadSuccess";
import axios from "axios";
import FormData from "form-data";

export default function UploadPage() {
  // eslint-disable-next-line
  const [animate, setAnimate] = useState("button__text");
  // eslint-disable-next-line
  const [loadClear, setLoadClear] = useState("blank");
  // eslint-disable-next-line
  const [successModal, setSuccessModal] = useState("success");
  // eslint-disable-next-line
  const [successContainer, setSuccessContainer] =
    useState("success__container");
  // eslint-disable-next-line
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [videoTitle, setVideoTitle] = useState("");
  const [videoDescription, setVideoDescription] = useState("");
  const [videoChannel, setVideoChannel] = useState("temp channel");
  const [coverFile, setCoverFile] = useState(null);
  const handleChangeTitle = (event) => {
    setVideoTitle(event.target.value);
  };
  const handleChangeDescription = (event) => {
    setVideoDescription(event.target.value);
  };
  // eslint-disable-next-line
  const handleChangeChannel = (event) => {
    setVideoChannel(event.target.value);
  };
  const handleChangeCoverFile = (event) => {
    setCoverFile(event.target.files[0]);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    // starts the publish button animation
    setAnimate("button__text button__text--uploading");
    // axios request to upload
    const formData = new FormData();
    formData.append("title", videoTitle);
    formData.append("description", videoDescription);
    formData.append("channel", videoChannel);
    formData.append("cover", coverFile);
    for (var key of formData.entries()) {
      console.log(key[0], key[1]);
    }
    axios
      .post("http://localhost:8080/videos", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {});
    setSuccessContainer("success__container success__container--displayed");
    setTimeout(() => {
      // makes the upload message visible
      setSuccessModal("success success--visible");
      setLoadClear("blank blank--load");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }, 3000);
  };
  return (
    <>
      <UploadSuccess
        className='success'
        successModal={successModal}
        successContainer={successContainer}
      />
      <div className={loadClear}>
        <Header />
        <div className='upload__container'>
          <div className='upload'>
            <h1 className='upload__headline'>Upload Video</h1>
            <form className='upload__form' onSubmit={submitHandler}>
              <div className='upload__data'>
                <div className='upload__file'>
                  <label htmlFor='cover' className='upload__label'>
                    VIDEO THUMBNAIL
                  </label>
                  <img
                    className='upload__thumbnail'
                    src={uploadPreview}
                    alt='upload preview'
                  />
                  <input
                    name='cover'
                    className='upload__cover'
                    type='file'
                    onChange={handleChangeCoverFile}
                  />
                </div>
                <div className='upload__fields'>
                  <label className='upload__label' htmlFor='title'>
                    TITLE YOUR VIDEO
                  </label>
                  <input
                    className='upload__title'
                    name='title'
                    placeholder='Add a title to your video'
                    onChange={handleChangeTitle}
                  />
                  <label className='upload__label' htmlFor='description'>
                    ADD A VIDEO DESCRIPTION
                  </label>
                  <textarea
                    className='upload__description'
                    name='description'
                    placeholder='Add a description to your video'
                    onChange={handleChangeDescription}
                  />
                </div>
              </div>
              <div className='upload__buttons'>
                <button className='upload__publish'>
                  <img
                    src={publishIcon}
                    alt='publish icon'
                    className='button__icon icon'
                  />
                  <p className={animate}>PUBLISH</p>
                </button>
                <button className='upload__cancel' type='reset'>
                  CANCEL
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
