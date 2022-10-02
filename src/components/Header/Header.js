import React from 'react';
import "./Header.scss";
import "../../styles/styles.scss";
import brainFlixLogo from "../../assets/images/BrainFlix-logo.svg";
import searchIcon from "../../assets/images/search.svg";
import uploadLogo from "../../assets/images/upload.svg";
import mohanMuruge from "../../assets/images/Mohan-muruge.jpg"

function Header() {
    return (<header>
            <div className='header'>
                <img src={brainFlixLogo} alt="BrainFlix logo" className="logo"/>
                <div className="actions">
                    <div className="actions__search">
                        <img src={searchIcon} className="actions__icon icon" alt="search icon"/>
                        <input type="text" className="actions__input" placeholder="Search"/>
                        <img src={mohanMuruge} alt="user profile" className="actions__pfp pfp actions__pfp--mobile"/>
                    </div>
                    <button className="actions__upload"><img src={uploadLogo} alt="upload icon" className="button__icon icon" /><p className="button__text">UPLOAD</p></button>
                    <img src={mohanMuruge} alt="user profile" className="actions__pfp pfp actions__pfp--tabletplus"/>
                </div>
            </div>
        </header>
    );
}

export default Header;