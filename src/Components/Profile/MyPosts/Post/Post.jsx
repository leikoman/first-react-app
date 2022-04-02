import React from "react";
import Ava from "./Ava/Ava";
import Like from "./Like/Like";
import css from './Post.module.css';
import Text from "./Text/Text";

const Post = () => {
    return (
        <div className={css.post}>
            <Ava></Ava>
            <Text></Text>
            <Like></Like>
        </div>
    );
}

export default Post