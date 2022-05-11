import React from "react";
import "./CurrentWeather.css";
import icon from "../../images/mostlysunny.png";

const CurrentWeather = () => {
    return (
        <div className="current-weather__container">
            <div className="icon-col">
                <img src={icon} alt="" className="icon" />
            </div>
            <div className="text-col">
                <span className="temp">
                    21<sup>o</sup>
                </span>
                <span className="desc">Mostly Sunny</span>
            </div>
        </div>
    );
};

export default CurrentWeather;
