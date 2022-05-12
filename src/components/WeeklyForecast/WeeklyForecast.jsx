import React from "react";
import "./WeeklyForecast.css";
import WeeklyCard from "./WeeklyCard/WeeklyCard";

const WeeklyForecast = ({weeklyData}) => {
    return (
        <section className="weekly-forecast">
            <h4 className="title">Next 5 days</h4>
            <div className="cards-wrapper">
                {weeklyData.map((dailyData) => (
                    <WeeklyCard key={dailyData.dt} dailyData={dailyData} />
                ))}
            </div>
        </section>
    );
};

export default WeeklyForecast;
