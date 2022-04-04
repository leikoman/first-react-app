import React from "react";
import Ava from "./Ava/Ava";
import Like from "./Like/Like";
import css from './Post.module.css';
import Text from "./Text/Text";

const Post = (props) => {
    return (
        <div className={css.post}>
            <Ava></Ava>
            <Text message={props.message}></Text>
            <Like count={props.count}></Like>
        </div>
    );
}

export default Post