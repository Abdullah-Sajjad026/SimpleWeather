import React from "react";
import "./InfoCard.css";

const InfoCard = ({data, title, extra}) => {
    return (
        <article className="info-card__container">
            <h2>
                {data} {extra}
            </h2>
            <h6>{title}</h6>
        </article>
    );
};

export default InfoCard;
