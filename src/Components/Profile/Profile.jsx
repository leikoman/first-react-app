import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import css from './Profile.module.css';
import Bio from './Bio/Bio';

const Profile = () => {
    return (
        <div className={css.content}>
            <Bio />
            <MyPosts />
        </div>
    );
}

export default Profile