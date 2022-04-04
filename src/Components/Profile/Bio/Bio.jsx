import React from "react";
import AboutMe from "./AboutMe/AboutMe";
import css from './Bio.module.css';
import Photo from "./Photo/Photo";

const Bio = () => {
    return (
        <div className={css.bio}>
            <Photo />
            <AboutMe />
        </div>
    );
}

export default Bio