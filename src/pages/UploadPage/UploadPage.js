import Header from "../../components/Header/Header";
import publishIcon from "../../assets/images/publish.svg";
import uploadPreview from "../../assets/images/Upload-video-preview.jpg";
import "./UploadPage.scss";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import UploadSuccess from "../../components/UploadSuccess/UploadSuccess";
import axios from "axios";
import FormData from "form-data";
import { badWords } from "../../components/ProfanityFilter/ProfanityFilter";
import { Link } from "react-router-dom";

export default function UploadPage() {
    const formRef = useRef();
    const [animatePublish, setAnimatePublish] = useState(false);
    const [loadClear, setLoadClear] = useState(false);
    const [successModal, setSuccessModal] = useState(false);
    const [successContainer, setSuccessContainer] = useState(false);
    const [verifyTitle, setVerifyTitle] = useState([
        true,
        "Add a title to your video",
    ]);
    const [verifyDescription, setVerifyDescription] = useState([
        true,
        "Add a description to your video",
    ]);

    const [verifyFile, setVerifyFile] = useState(true);
    const navigate = useNavigate();
    const [videoTitle, setVideoTitle] = useState("");
    const [videoDescription, setVideoDescription] = useState("");
    const [coverFile, setCoverFile] = useState(null);

    const handleChangeTitle = (event) => {
        setVideoTitle(event.target.value);
    };

    const handleChangeDescription = (event) => {
        setVideoDescription(event.target.value);
    };

    const handleChangeCoverFile = (event) => {
        setCoverFile(event.target.files[0]);
    };

    const isTitleValid = () => {
        console.log("titleVerifier");
        console.log(videoTitle);
        if (videoTitle === "") {
            setVerifyTitle([false, "Title cannot be blank"]);
            formRef.current.title.value= "";
            return false;
        } else if (badWords.some((v) => videoTitle.includes(v))) {
            setVerifyTitle([false, "Clean up the language, bucko"]);
            formRef.current.title.value= "";
            return false;
        } else {
            setVerifyTitle([true, "Add a title to your video"]);
            return true;
        }
    };

    const isDescriptionValid = () => {
        if (videoTitle === "") {
            setVerifyDescription([false, "Description cannot be blank"]);
            formRef.current.description.value= "";
            return false;
        } else if (badWords.some((v) => videoDescription.includes(v))) {
            setVerifyDescription([false, "Clean up the language, bucko"]);
            formRef.current.description.value= "";
            return false;
        } else {
            setVerifyDescription([true, "Add a description to your video"]);
            return true;
        }
    };

    const isFileValid = () => {
        if (coverFile === null) {
            setVerifyFile(false);
            return false;
        } else {
            setVerifyFile(true);
            return true;
        }
    };

    const isFormValid = () => {
        console.log(isTitleValid(), isDescriptionValid(), isFileValid());
        if (isTitleValid() && isDescriptionValid() && isFileValid()) {
            return true;
        } else {
            return false;
        }
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if (isFormValid()) {
            const formData = new FormData();
            for (var key of formData.entries()) {
                console.log(key[0], key[1]);
            }

            // starts the publish button animation
            setAnimatePublish(true);
            // axios request to upload

            formData.append("title", videoTitle);
            formData.append("description", videoDescription);
            formData.append("cover", coverFile);
            setSuccessContainer(true);
            axios
                .post("http://localhost:8080/videos", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                .then((response) => {
                    // makes the upload message visible
                    setSuccessModal(true);
                    return response;
                })
                .then((response) => {
                    setLoadClear(true);
                    setTimeout(() => {
                        navigate("/");
                    },500);
                });
        }
    };

    return (
        <>
            <UploadSuccess
                className='success'
                successModal={`success${
                    successModal === false ? "" : " success--visible"
                }`}
                successContainer={`success__container${
                    successContainer === false
                        ? ""
                        : " success__container--displayed"
                }`}
            />
            <div
                className={`blank${loadClear === false ? "" : " blank--load"}`}
            >
                <Header />
                <div className='upload__container'>
                    <div className='upload'>
                        <h1 className='upload__headline'>Upload Video</h1>
                        <form
                            className='upload__form'
                            onSubmit={submitHandler}
                            ref={formRef}
                        >
                            <div className='upload__data'>
                                <div className='upload__file'>
                                    <label
                                        htmlFor='cover'
                                        className='upload__label'
                                    >
                                        VIDEO THUMBNAIL
                                    </label>
                                    <div className='upload__picture'>
                                        <img
                                            className={`upload__thumbnail${
                                                verifyFile === true
                                                    ? ""
                                                    : " upload__thumbnail--error"
                                            }`}
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
                                </div>
                                <div className='upload__fields'>
                                    <label
                                        className='upload__label'
                                        htmlFor='title'
                                    >
                                        TITLE YOUR VIDEO
                                    </label>
                                    <input
                                        className={`upload__title${
                                            verifyTitle[0] === true
                                                ? ""
                                                : " upload__title--error"
                                        }`}
                                        name='title'
                                        placeholder={verifyTitle[1]}
                                        onChange={handleChangeTitle}
                                    />
                                    <label
                                        className='upload__label'
                                        htmlFor='description'
                                    >
                                        ADD A VIDEO DESCRIPTION
                                    </label>
                                    <textarea
                                        className={`upload__description${
                                            verifyTitle[0] === true
                                                ? ""
                                                : " upload__description--error"
                                        }`}
                                        name='description'
                                        placeholder={verifyDescription[1]}
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
                                    <p
                                        className={`button__text${
                                            animatePublish === false
                                                ? ""
                                                : " button__text--uploading"
                                        }`}
                                    >
                                        PUBLISH
                                    </p>
                                </button>
                                <Link className='cancel__link' to={`/`}>
                                    <button
                                        className='upload__cancel'
                                        type='reset'
                                    >
                                        CANCEL
                                    </button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
