import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import css from './Profile.module.css';

const Profile = () => {
    return (
        <div className={css.content}>
            
            <p>
            <MyPosts /></p>
        </div>
    );
}

export default Profile