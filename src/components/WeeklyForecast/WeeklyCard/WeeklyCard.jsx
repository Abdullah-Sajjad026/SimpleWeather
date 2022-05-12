import React from "react";
import icon from "../../../images/mostlysunny.png";
import "./WeeklyCard.css";

const WeeklyCard = ({dailyData}) => {
    return (
        <article className="weekly-card">
            <div className="daydate">
                <p className="day">6:00</p>
                <p className="date">18 Jan</p>
            </div>
            <img src={icon} alt="" className="icon" />
            <div className="high">
                <p className="temp">
                    {dailyData.temp.max} <sup>o</sup> C
                </p>
                <p className="desc">Max Temp</p>
            </div>
            <div className="weather">
                <p className="temp">
                    {dailyData.temp.day} <sup>o</sup> C<sup>o</sup>
                </p>
                <p className="desc">{dailyData.weather[0].main}</p>
            </div>
            <div className="wind">
                <p className="speed">{dailyData.wind_speed}</p>
                <p className="desc">Wind Speed</p>
            </div>

            <div className="rain">
                <p className="percentage">
                    {dailyData.humidity} <sup>o</sup> C
                </p>
                <p className="desc">Humidity</p>
            </div>
        </article>
    );
};

export default WeeklyCard;
