import React from "react";
import "./CurrentInfo.css";

const CurrentInfo = ({currentData, todayData, convertIntoDateTime}) => {
    const sunriseResult = convertIntoDateTime(currentData.sunrise);
    const sunrise = sunriseResult.toString().split(" ")[4];
    const sunsetResult = convertIntoDateTime(currentData.sunset);
    const sunset = sunsetResult.toString().split(" ")[4];
    return (
        <div className="current-info__container">
            <div className="single-row mb-4 mb-lg-2">
                <article className="info-card__container">
                    <h2>
                        {todayData.temp.max} <sup>o</sup> C
                    </h2>
                    <h6>High</h6>
                </article>

                <article className="info-card__container">
                    <h2>{currentData.wind_speed}mph</h2>
                    <h6>Wind</h6>
                </article>
                <article className="info-card__container">
                    <h2>{sunrise}</h2>
                    <h6>Sunrise</h6>
                </article>
            </div>
            <div className="single-row">
                <article className="info-card__container">
                    <h2>
                        {todayData.temp.min} <sup>o</sup> C{" "}
                    </h2>
                    <h6>Low</h6>
                </article>

                <article className="info-card__container">
                    <h2>
                        {currentData.humidity} <sup>o</sup> C
                    </h2>
                    <h6>Humidity</h6>
                </article>
                <article className="info-card__container">
                    <h2>{sunset}</h2>
                    <h6>Sunset</h6>
                </article>
            </div>
        </div>
    );
};

export default CurrentInfo;
