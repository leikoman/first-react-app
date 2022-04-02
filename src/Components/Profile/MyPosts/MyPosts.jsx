import React from "react";
import css from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={css.myposts}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <text><b>&lt;</b>&lt; 1...<b>3</b>...9 &gt;<b>&gt;</b></text>ч
        </div>
    );
}

export default MyPosts