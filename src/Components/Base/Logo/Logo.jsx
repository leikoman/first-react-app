import React from "react";
import css from './Logo.module.css';

const Logo = () => {
    return (
        <div className={css.logo}>
            <img alt='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGhXLbPFpxdRyFc6g-G1dkjL1JYyRP9KEccg&usqp=CAU'></img>
        </div>
    );
}

export default Logo