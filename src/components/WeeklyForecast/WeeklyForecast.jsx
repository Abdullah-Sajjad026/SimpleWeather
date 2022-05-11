import React from "react";
import "./WeeklyForecast.css";
import WeeklyCard from "./WeeklyCard/WeeklyCard";

const WeeklyForecast = () => {
    return (
        <div className="weekly-forecast">
            <h4 className="title">Next 5 days</h4>
            <div className="cards-wrapper">
                <WeeklyCard />
            </div>
        </div>
    );
};

export default WeeklyForecast;
