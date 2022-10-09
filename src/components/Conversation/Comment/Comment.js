import './Comment.scss'
import addComment from '../../../assets/images/add_comment.svg';
import mohanMuruge from '../../../assets/images/Mohan-muruge.jpg';
import "../../../styles/styles.scss";

function Comment() {
    return (
        <div className="comment">
        
        <img src={mohanMuruge} alt="user profile" className="comment__pfp pfp"/>
        <form action="" className="comment__form">
            <label for="name" className="name__label">NAME</label>
            <input type="text" name="name" autocomplete="off" className="name__input" maxlength="45" placeholder="Enter your name" />
            <label htmlFor="posttextarea" className="post__label">JOIN THE CONVERSATION</label>
            <textarea name="posttextarea" id="postTextArea" className="post__textarea" wrap="soft" placeholder="Add a new comment"/>
            <button className="comment__button">
                <img src={addComment} alt="comment icon" className="button__icon icon"/>
                <p className="button__text">COMMENT</p>
            </button>
        </form>
    </div>
    );
}

export default Comment;