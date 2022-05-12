import React from "react";
import "./CurrentInfo.css";
import InfoCard from "./InfoCard/InfoCard";

const CurrentInfo = ({currentData}) => {
    console.log(currentData);
    return (
        <div className="current-info__container">
            <div className="single-row">
                <InfoCard title={"High"} />
                <InfoCard
                    title={"Wind"}
                    data={currentData.wind_speed}
                    extra={"mph"}
                />
                <InfoCard title={"Sunrise"} data={currentData.sunrise} />
            </div>
            <div className="single-row">
                <InfoCard />
                <InfoCard
                    title={"Humidity"}
                    data={currentData.humidity}
                    extra={"C"}
                />
                <InfoCard title={"Sunset"} data={currentData.sunset} />
            </div>
        </div>
    );
};

export default CurrentInfo;
