import React from "react";
import css from './SearchBar.module.css';
import Search from './Search/Search';
import Login from './Login/Login';

const SearchBar = () => {
    return (
        <div className={css.searchbar}>
            <Search></Search>
            <Login></Login>
        </div>)
}

export default SearchBar;