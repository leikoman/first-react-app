import React from "react";
import css from './Photo.module.css';

const Photo = () => {
    return (
        <div className={css.photoBorder}>
            <img className={css.photoImage} alt='photo' src='./././photo.jpg'></img>
        </div>
    );
}

export default Photo