import React from 'react';
import "./Header.scss";

function Header() {
    return (<header>
            <img src="./assets/images/BrainFlix-logo.svg" alt="BrainFlix logo" class="logo"/>
            <div class="actions">
                <div class="actions__search">
                    <img src="assets/images/search.svg" class="actions__icon icon"/>
                    <input type="text" class="actions__input" placeholder="Search"/>
                    <img src="./assets/images/Mohan-muruge.jpg" alt="user profile picture" class="actions__pfp pfp actions__pfp--mobile"/>
                </div>
                <button class="actions__upload"><img src="assets/images/upload.svg" alt="upload icon" class="button__icon icon"/><p class="button__text">UPLOAD</p></button>
                <img src="./assets/images/Mohan-muruge.jpg" alt="user profile picture" class="actions__pfp pfp actions__pfp--tabletplus"/>
            </div>
        </header>
    );
}

export default Header;