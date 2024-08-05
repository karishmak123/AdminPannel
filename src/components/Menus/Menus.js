import React from 'react'
import { MdMyLocation } from "react-icons/md";
import { LiaHamburgerSolid } from "react-icons/lia";
import { IoIosArrowForward } from "react-icons/io";
import { FaHardHat } from "react-icons/fa";

const Menus = () => {
    return (
        <div className="custom-list">
            <a href="#" className="custom-list-item">
                <div className="icon-wrapper og">
                    <MdMyLocation />
                </div>
                <div className="text-content">
                    <span className="title">Goals</span>
                </div>
                <div className="arrow-icon">
                    <IoIosArrowForward />
                </div>
            </a>
            <a href="#" className="custom-list-item">
                <div className="icon-wrapper bl">
                    <LiaHamburgerSolid />
                </div>
                <div className="text-content">
                    <span className="title">Popular Dishes</span>
                </div>
                <div className="arrow-icon">
                    <IoIosArrowForward />
                </div>
            </a>
            <a href="#" className="custom-list-item">
                <div className="icon-wrapper gr">
                    <FaHardHat />
                </div>
                <div className="text-content">
                    <span className="title">Menus</span>
                </div>
                <div className="arrow-icon">
                    <IoIosArrowForward />
                </div>
            </a>
        </div>
    )
}

export default Menus