import "./App.css";
import Title from "./components/Title/Title";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import CurrentInfo from "./components/CurrentInfo/CurrentInfo";
import HourlyForecast from "./components/HourlyForecast/HourlyForecast";
import WeeklyForecast from "./components/WeeklyForecast/WeeklyForecast";
import {useEffect, useState} from "react";
import axios from "axios";
import ZipcodeForm from "./components/ZipcodeForm/ZipcodeForm";

const App = () => {
    const [lat, setLat] = useState("");
    const [long, setLong] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [currentData, setCurrentData] = useState("");
    const [hourlyData, setHourlyData] = useState("");
    const [weeklyData, setWeeklyData] = useState("");

    const getUserCoordinates = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log(position.coords.latitude);
                    console.log(position.coords.longitude);
                    setLat(position.coords.latitude);
                    setLong(position.coords.longitude);
                },
                (error) => {
                    alert(
                        "Geolocation is not supported by your browser. Using default location."
                    );
                }
            );
        }
    };
    // current and daily endpoint
    //  https://api.openweathermap.org/data/2.5/onecall?lat=30.1575&lon=71.5249&exclude=minutely,hourly&appid=24393b1b5186b9b5b6a7c4fdfa4f8e2d&units=metric

    // 3 hours
    //  https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&cnt=8&appid=24393b1b5186b9b5b6a7c4fdfa4f8e2d&units=metric

    const fetchHourlyData = async () => {
        const {data} = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&cnt=8&appid=24393b1b5186b9b5b6a7c4fdfa4f8e2d&units=metric`
        );

        setHourlyData(data.list);
        setCity(data.city.name);
        setCountry(data.city.country);
    };
    const fatchOneCallData = async () => {
        const {data} =
            await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely,hourly&appid=24393b1b5186b9b5b6a7c4fdfa4f8e2d&units=metric
      `);
        setCurrentData(data.current);
        setWeeklyData(data.daily);
    };
    const fetchHourlyDataByZipcode = async (zipcode) => {
        const {data} = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},${country.toLowerCase()}&cnt=8&appid=24393b1b5186b9b5b6a7c4fdfa4f8e2d&units=metric`
        );

        setHourlyData(data.list);
        setCity(data.city.name);
    };
    const fetchOneCallDataByZipcode = async (zipcode) => {
        console.log(zipcode);
        const {data} =
            await axios.get(`https://api.openweathermap.org/data/2.5/onecall?zip=${zipcode},${country.toLowerCase()}&exclude=minutely,hourly&appid=24393b1b5186b9b5b6a7c4fdfa4f8e2d&units=metric
      `);
        setCurrentData(data.current);
        setWeeklyData(data.daily);
    };

    useEffect(() => {
        getUserCoordinates();
    }, []);
    useEffect(() => {
        if (lat && long) {
            fatchOneCallData();
            fetchHourlyData();

            currentData && console.log("currentData: ", currentData);
            hourlyData && console.log("hourlyData: ", hourlyData);
            weeklyData && console.log("weeklyData: ", weeklyData);
        }
    }, [long, lat]);

    return (
        <main className="app">
            <div className="container">
                <ZipcodeForm
                    fetchHourlyDataByZipcode={fetchHourlyDataByZipcode}
                    fetchOneCallDataByZipcode={fetchOneCallDataByZipcode}
                />
                {currentData && hourlyData && weeklyData && (
                    <>
                        <Title city={city} country={country} />
                        <div className="row">
                            <div className="col col-md-6">
                                <CurrentWeather currentData={currentData} />
                            </div>
                            <div className="col col-md-6">
                                <CurrentInfo currentData={currentData} />
                            </div>
                        </div>
                        <HourlyForecast hourlyData={hourlyData} />
                        <WeeklyForecast weeklyData={weeklyData} />
                    </>
                )}
            </div>
        </main>
    );
};

export default App;
