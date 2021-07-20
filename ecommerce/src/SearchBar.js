import React from 'react'
import './App.css';

function SearchBar(props) {

    return (
        <div className={`${props.setSearchBarClass} search-bar-div`}>
            <input type="text" id="search-bar" placeholder="Search Product"/>
        </div>
    );
}

export default SearchBar;