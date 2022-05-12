import React from "react";
import "./Title.css";

const Title = ({city, country}) => {
    let today = new Date();
    let date, day, dayCount, month, monthCount;

    date = today.getDate();
    monthCount = today.getMonth() + 1;
    dayCount = today.getDay();

    switch (dayCount) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            day = "";
    }

    switch (monthCount) {
        case 1:
            month = "January";
            break;
        case 2:
            month = "Feburary";
            break;
        case 3:
            month = "March";
            break;
        case 4:
            month = "April";
            break;
        case 5:
            month = "May";
            break;
        case 6:
            month = "June";
            break;
        case 7:
            month = "July";
            break;
        case 8:
            month = "August";
            break;
        case 9:
            month = "September";
            break;
        case 10:
            month = "October";
            break;
        case 11:
            month = "November";
            break;
        case 12:
            month = "December";
            break;
        default:
            month = "";
    }

    console.log(date, month, day);
    return (
        <div>
            <h1 className="location">
                {city}, {country}
            </h1>
            <h5 className="date">
                {day} {date} {month}
            </h5>
        </div>
    );
};

export default Title;
