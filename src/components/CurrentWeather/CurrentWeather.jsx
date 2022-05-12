import React from "react";
import "./CurrentWeather.css";
import icon from "../../images/mostlysunny.png";

const CurrentWeather = ({currentData}) => {
    return (
        <div className="current-weather__container">
            <div className="icon-col">
                <img src={icon} alt="" className="icon" />
            </div>
            <div className="text-col">
                <span className="temp">
                    {currentData.temp} <sup>o</sup> C
                </span>
                <span className="desc">{currentData.weather[0].main}</span>
            </div>
        </div>
    );
};

export default CurrentWeather;
