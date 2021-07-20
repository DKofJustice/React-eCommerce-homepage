import React from 'react';
import './App.css';
import hamBtn from "./SVG Assets/Hamburger Menu.svg";
import searchBtn from "./SVG Assets/SearchIcon.svg";
import favorites from "./SVG Assets/Favorites.svg";

function Header(props) {
    return (
        <header className="header header-mobile">

          <img src={hamBtn} alt="hamburger button" 
          onClick={props.sideMenuToggle} />

          <h1 className="titleLogo">Logo</h1>

          <img src={favorites} alt="favorites" />

          <img src={searchBtn} alt="searchBtn" 
          onClick={props.showSearchBar}/>
          
        </header>
    );
}

export default Header;

