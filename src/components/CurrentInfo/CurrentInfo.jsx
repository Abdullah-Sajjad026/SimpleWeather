import React from "react";
import "./CurrentInfo.css";
import InfoCard from "./InfoCard/InfoCard";

const CurrentInfo = () => {
    return (
        <div className="current-info__container">
            <div className="single-row">
                <InfoCard />
                <InfoCard />
                <InfoCard />
            </div>
            <div className="single-row">
                <InfoCard />
                <InfoCard />
                <InfoCard />
            </div>
        </div>
    );
};

export default CurrentInfo;
