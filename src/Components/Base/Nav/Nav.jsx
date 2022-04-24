import React from "react";
import css from './Nav.module.css';
import { NavLink } from 'react-router-dom';


const Nav = () => {
    return (
        <nav className={css.nav}>
            <div className={css.item}>
                <NavLink to="/news" className={SelectedLink()}>
                    <img alt="News" src="./././nav-news.jpg"></img>
                </NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/dialogs" className={SelectedLink()}>
                    <img alt="Messages" src="./././nav-messages.jpg"></img>
                </NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/photo" className={SelectedLink()}>
                    <img alt="Photo" src="./././nav-photo.jpg"></img>
                </NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/music" className={SelectedLink()}>
                    <img alt="Music" src="./././nav-music.jpg"></img>
                </NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/" className={SelectedLink()}>
                    <img alt="About Me" src="./././nav-settings.jpg"></img>
                </NavLink>
            </div>
        </nav>
    )
}
export default Nav


const SelectedLink = () => {
    return (
        select => select.isActive ? css.activeLink : css.item
    )
}