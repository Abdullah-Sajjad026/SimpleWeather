import React from "react";
import "./CurrentWeather.css";

const CurrentWeather = ({currentData}) => {
    return (
        <div className="current-weather__container">
            <div className="icon-col">
                <img
                    src={
                        window.location.origin +
                        `/images/${currentData.weather[0].icon}.png`
                    }
                    alt=""
                    className="icon"
                />
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
