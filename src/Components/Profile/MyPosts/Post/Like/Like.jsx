import React from "react";
import css from './Like.module.css';

const Like = (props) => {
    return (
    <div className={css.like}>
        <img alt="" src='./././././post-like.jpg'></img>
        {props.count}
    </div>)
}

export default Like;