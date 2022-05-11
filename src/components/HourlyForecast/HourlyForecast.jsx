import React from "react";
import HourlyCard from "./HourlyCard/HourlyCard";
import "./HourlyForecast.css";

const HourlyForecast = () => {
    return (
        <div className="hourly-forecast">
            <h4 className="title">Today's Weather</h4>
            <div className="cards-wrapper">
                <HourlyCard />
                <HourlyCard />
                <HourlyCard />
                <HourlyCard />
                <HourlyCard />
                <HourlyCard />
                <HourlyCard />
            </div>
        </div>
    );
};

export default HourlyForecast;
