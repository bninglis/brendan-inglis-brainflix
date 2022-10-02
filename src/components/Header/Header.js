import React from 'react';
import "./Header.scss";
import "../../styles/styles.scss";

function Header() {
    return (<header>
            <img src="./assets/images/BrainFlix-logo.svg" alt="BrainFlix logo" className="logo"/>
            <div className="actions">
                <div className="actions__search">
                    <img src="assets/images/search.svg" className="actions__icon icon" alt="search icon"/>
                    <input type="text" className="actions__input" placeholder="Search"/>
                    <img src="./assets/images/Mohan-muruge.jpg" alt="user profile" className="actions__pfp pfp actions__pfp--mobile"/>
                </div>
                <button className="actions__upload"><img src="assets/images/upload.svg" alt="upload icon" className="button__icon icon" /><p className="button__text">UPLOAD</p></button>
                <img src="./assets/images/Mohan-muruge.jpg" alt="user profile" className="actions__pfp pfp actions__pfp--tabletplus"/>
            </div>
        </header>
    );
}

export default Header;