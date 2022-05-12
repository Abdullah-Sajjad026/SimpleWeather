import React from "react";
import HourlyCard from "./HourlyCard/HourlyCard";
import "./HourlyForecast.css";

const HourlyForecast = () => {
    return (
        <section className="hourly-forecast">
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
        </section>
    );
};

export default HourlyForecast;
