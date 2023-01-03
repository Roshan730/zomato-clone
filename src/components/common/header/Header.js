import React from "react";
import "./Header.css";
import { ImLocation } from "react-icons/im";
import { FaCaretDown } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCaretDown } from "react-icons/bs";

const Header = () => {
  return (
    <div className="max-width header">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="zomatoLogo"
        className="header-logo"
      />
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <ImLocation className="absolute-center location-icon" />
              <div>Banglore</div>
            </div>
            <FaCaretDown className="absolute-center" />
          </div>
          <div className="location-search-separator"></div>
          <div className="header-searchBar">
            <AiOutlineSearch className="absolute-center search-icon" />
            <input
              className="search-input"
              type="text"
              placeholder="Search for restaurant, cuisine or a dish"
            />
          </div>
        </div>
        <div className="profile-wrapper">
          <img
            src="https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
            className="header-profile-image"
            alt="Profile"
          />
          <span className="header-username">Roshan</span>
          <BsCaretDown className="absolute-center profile-options-icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
