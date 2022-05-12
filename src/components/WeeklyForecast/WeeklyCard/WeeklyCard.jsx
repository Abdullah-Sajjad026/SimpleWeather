import React from "react";
import "./WeeklyCard.css";

const WeeklyCard = ({dailyData, convertIntoDateTime}) => {
    const dailyResult = convertIntoDateTime(dailyData.dt);

    const day = dailyResult.toString().split(" ")[0];
    const date = dailyResult.toString().split(" ")[2];
    const month = dailyResult.toString().split(" ")[1];
    return (
        <article className="weekly-card">
            <div className="daydate">
                <p className="day">{day}</p>
                <p className="date">
                    {date} {month}
                </p>
            </div>
            <div className="img-wrapper">
                <img
                    src={
                        window.location.origin +
                        `/images/${dailyData.weather[0].icon}.png`
                    }
                    alt=""
                    className="icon"
                />
            </div>
            <div className="high">
                <p className="temp">
                    {dailyData.temp.max} <sup>o</sup> C
                </p>
                <p className="desc">Max Temp</p>
            </div>
            <div className="weather">
                <p className="temp">
                    {dailyData.temp.day} <sup>o</sup> C
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
