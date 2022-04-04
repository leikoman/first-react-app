import React from "react";
import css from './Text.module.css';

const Text = (props) => {
    return (
        <div className={css.text}>
            {props.message}
        </div>
    );
}

export default Text