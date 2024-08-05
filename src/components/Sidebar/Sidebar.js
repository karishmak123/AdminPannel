import React, { useState } from 'react';
import './Sidebar.css';
import { IoMdHome } from "react-icons/io";
import { SiSimpleanalytics } from "react-icons/si";
import { CiSquareCheck, CiWallet } from "react-icons/ci";
import { FaBars, FaTimes } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { BsBagCheck } from "react-icons/bs";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="close-icon" onClick={toggleSidebar}>
        <FaTimes />
      </div>
      <div className="logo">
        <img src="/image/logo.png" alt="Logo" />
      </div>
      <div className="icon active"><IoMdHome /></div>
      <div className="icon"><SiSimpleanalytics /></div>
      <div className="icon"><CiSquareCheck /></div>
      <div className="icon"><CiWallet /></div>
      <div className="icon"><BsBagCheck/></div>
      <div className="logout">
       <RiLogoutCircleRLine/>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dashboard">
      <div className="hamburger" onClick={toggleSidebar}>
        <FaBars />
      </div>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default Dashboard;
