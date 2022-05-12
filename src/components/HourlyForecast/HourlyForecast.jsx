import React from "react";
import HourlyCard from "./HourlyCard/HourlyCard";
import "./HourlyForecast.css";

const HourlyForecast = ({hourlyData}) => {
    console.log(hourlyData);
    return (
        <section className="hourly-forecast">
            <h4 className="title">Today's Weather</h4>
            <div className="cards-wrapper">
                {hourlyData.map((hourData) => (
                    <HourlyCard hourData={hourData} />
                ))}
            </div>
        </section>
    );
};

export default HourlyForecast;
