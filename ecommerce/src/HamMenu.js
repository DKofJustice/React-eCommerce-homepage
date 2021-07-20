import React from 'react'
import './App.css';
import hamBtn from "./SVG Assets/Hamburger Menu.svg";
import accountIcon from "./SVG Assets/AccountIcon.svg";

function HamMenu(props) {
    return (
        <div className={`${props.setDisplay} side-menu`}>
            
            <div className="top-icons">

                <img src={hamBtn} id="hamBtn" 
                alt="hamburger button" onClick={props.sideMenuToggle}/>

                <img src={accountIcon} id="accountIcon" 
                alt="accountIcon" />

            </div>

            <div className="side-menu-list">
                <h2>Homepage</h2>
                <h2>Lorem Ipsum</h2>
                <h2>Lorem Ipsum</h2>
                <h2>Lorem Ipsum</h2>
                <h2>Favorites</h2>
                <h2>Orders</h2>
                <h2>Account Settings</h2>
                <h2>Log Out</h2>

            </div>

        </div>
    );
};

export default HamMenu;