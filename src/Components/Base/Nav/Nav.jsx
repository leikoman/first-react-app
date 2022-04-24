import React from "react";
import css from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={css.nav}>
            <div className={css.item}>
                <a href="/news">
                    <img alt="News" src="./././nav-news.jpg"></img>
                </a>
            </div>
            <div className={css.item}>
                <a href="/dialogs">
                    <img alt="Messages" src="./././nav-messages.jpg"></img>
                </a>
            </div>
            <div className={css.item}>
                <a href="/photo">
                    <img alt="Photo" src="./././nav-photo.jpg"></img>
                </a>
            </div>
            <div className={css.item}>
                <a href="/music">
                    <img alt="Music" src="./././nav-music.jpg"></img>
                </a>
            </div>
            <div className={css.item}>
                <a href="/">
                    <img alt="About Me" src="./././nav-settings.jpg"></img>
                </a>
            </div>
        </nav>
    )
}

export default Nav