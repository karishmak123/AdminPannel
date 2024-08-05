import React from 'react';
import './Header.css';
import { MdOutlineSettings } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { VscBellDot } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";

const Activity = () => {
  return (
    <div className="header">
      <div className="logo-search">
        <div className="search-container">
          <CiSearch className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="user-icons">
        <span><MdOutlineEmail /></span>
        <span><MdOutlineSettings /></span>
        <span><VscBellDot /></span>
        <img src="/image/demo-image.jpg" alt="User Profile" />
      </div>
    </div>
  );
};

export default Activity;
