import React from "react";
import css from './Search.module.css';

const Search = () => {
    return (
        <div className={css.search}>
            <form>
                <label>Search: </label>
                <input type={"search"} />
            </form>
        </div>
    );
}

export default Search