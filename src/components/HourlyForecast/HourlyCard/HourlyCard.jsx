import React from "react";
import "./HourlyCard.css";

const HourlyCard = ({hourData}) => {
    return (
        <div className="hourly-card">
            <p className="time">{hourData.dt_txt.replace("2022-", "")}</p>
            <img
                src={
                    window.location.origin +
                    `/images/${hourData.weather[0].icon}.png`
                }
                alt=""
                className="icon"
            />
            <p className="temp">
                {hourData.main.temp} <sup>o</sup> C
            </p>
        </div>
    );
};

export default HourlyCard;
