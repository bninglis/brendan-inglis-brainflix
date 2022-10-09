import './Comment.scss'
import addComment from '../../../assets/images/add_comment.svg';
import mohanMuruge from '../../../assets/images/Mohan-muruge.jpg';
import "../../../styles/styles.scss";
import { useState, useRef } from 'react';
import { badWords } from '../../ProfanityFilter/ProfanityFilter';
import axios from 'axios';


function Comment({videoId,BASE_URL,API_KEY,commentsState,setCommentsState}) {
    const formRef = useRef();
    const form = formRef.current;
    const [nameInputString, setNameInputString] = useState("");
    const [nameAttributes, setNameAttributes] = useState({class: "name__input",placeholder: "Enter your name"});
    const [commentInputString, setCommentInputString] = useState("");
    const [commentAttributes, setCommentAttributes] = useState({class: "post__textarea",placeholder: "Add a new comment"});
    const handleChangeName = (event) => {
        setNameInputString(event.target.value);
    };
    const handleChangeComment = (event) => {
        setCommentInputString(event.target.value);
    };
    const isNameValid = ()=> {
        if (nameInputString===""){
            setNameAttributes({class: "name__input name__input--error",placeholder: "Name cannot be blank"});
            return false;
        } else if (badWords.some(v => nameInputString.includes(v))) {
            setNameAttributes({class: "name__input name__input--error",placeholder: "Clean up the language, bucko"});
            form.name.value = "";
            return false;
        } else{
            setNameAttributes({class: "name__input",placeholder: "Enter your name"});
            return true;
        }
    }

    const isCommentValid = ()=> {
        if (commentInputString===""){
            setCommentAttributes({class: "post__textarea post__textarea--error",placeholder: "Comment cannot be blank"});
            return false;
        } else if (badWords.some(v => commentInputString.includes(v))) {
            setCommentAttributes({class: "post__textarea post__textarea--error",placeholder: "Clean up the language, bucko"});
            form.posttextarea.value = "";
            return false;
        } else{
            setCommentAttributes({class: "post__textarea",placeholder: "Add a new comment"});
            return true;
        }
    }
    const isPostValid = ()=> {
        if(!isNameValid()){
            // still need to run the validation check if the first returns false
            isCommentValid();
            return false;
        };
        if(!isCommentValid()){
            return false;
        }
        return true;
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (isPostValid()){
            console.log("Post success!")
            axios.post(`${BASE_URL}/videos/${videoId}/comments?api_key=${API_KEY}`,{name: nameInputString, comment: commentInputString})
                .then((response)=>{
                    console.log(response)
                    setCommentsState([...commentsState,response.data])
                })
        };
    };
    return (
        <div className="comment">
        <img src={mohanMuruge} alt="user profile" className="comment__pfp pfp"/>
        <form action="" className="comment__form" onSubmit={handleSubmit} ref={formRef}>
            <label htmlFor="name" className="name__label">NAME</label>
            <input type="text" name="name" autoComplete="off" className={nameAttributes.class} maxLength="45" placeholder={nameAttributes.placeholder} onChange={handleChangeName}/>
            <label htmlFor="posttextarea" className="post__label">JOIN THE CONVERSATION</label>
            <textarea name="posttextarea" id="postTextArea" className={commentAttributes.class} wrap="soft" placeholder={commentAttributes.placeholder} onChange={handleChangeComment}/>
            <button className="comment__button">
                <img src={addComment} alt="comment icon" className="button__icon icon"/>
                <p className="button__text">COMMENT</p>
            </button>
        </form>
    </div>
    );
}

export default Comment;