import React from "react";
import css from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={css.DialogsPage}>
            <div className={css.Dialogs}>
                <div className={css.ActiveDialog}>Vasya</div>
                <div className={css.Dialog}>Petya</div>
                <div className={css.Dialog}>Semen</div>
                <div className={css.Dialog}>Igor</div>
                <div className={css.Dialog}>Petr</div>
                <div className={css.Dialog}>Tanya</div>
                <div className={css.Dialog}>Katya</div>
                <div className={css.Dialog}>Sveta</div>
                <div className={css.Dialog}>Nastya</div>
                <div className={css.Dialog}>Innokentii</div>
            </div>
            <div className={css.messages}>
                <div className={css.message}>Hi!</div>
                <div className={css.message}>What are u doing?</div>
                <div className={css.message}>How are u?</div>
                <div className={css.message}>Let's go!</div>
                <div className={css.message}>Bye!</div>
            </div>
        </div>
    );
}

export default Dialogs