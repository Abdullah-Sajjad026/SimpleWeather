import React from "react";
import "./HourlyCard.css";
import icon from "../../../images/mostlysunny.png";

const HourlyCard = () => {
    return (
        <div className="hourly-card">
            <p className="time">6:00</p>
            <img src={icon} alt="" className="icon" />
            <p className="temp">
                17<sup>o</sup>
            </p>
        </div>
    );
};

export default HourlyCard;
