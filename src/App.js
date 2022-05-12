import "./App.css";
import Title from "./components/Title/Title";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import CurrentInfo from "./components/CurrentInfo/CurrentInfo";
import HourlyForecast from "./components/HourlyForecast/HourlyForecast";
import WeeklyForecast from "./components/WeeklyForecast/WeeklyForecast";
import {useEffect, useState} from "react";
import axios from "axios";
import ZipcodeForm from "./components/ZipcodeForm/ZipcodeForm";
import Loading from "./components/Loading/Loading";

const App = () => {
    const [lat, setLat] = useState("");
    const [long, setLong] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [currentData, setCurrentData] = useState("");
    const [hourlyData, setHourlyData] = useState("");
    const [weeklyData, setWeeklyData] = useState("");
    const [todayData, setTodayData] = useState("");

    const getUserCoordinates = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
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

    // get hourly data by laitude and longitude on 1st loading of page
    const fetchHourlyData = async () => {
        const {data} = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&cnt=8&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=metric`
        );

        setHourlyData(data.list);
        setCity(data.city.name);
        setCountry(data.city.country);
    };
    // get current and weekly data by laitude and longitude on 1st loading of page

    const fetchOneCallData = async () => {
        const {data} =
            await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely,hourly&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=metric
      `);
        setCurrentData(data.current);
        setWeeklyData(data.daily);
        setTodayData(data.daily[0]);
    };

    // get hourly data by zipcode on 1st loading of page

    const fetchHourlyDataByZipcode = async (zipcode) => {
        const {data} = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},${country.toLowerCase()}&cnt=8&appid=${
                process.env.REACT_APP_OPENWEATHER_API_KEY
            }&units=metric`
        );

        setHourlyData(data.list);
        setCity(data.city.name);
    };
    // get current and weekly data for users added location
    const fetchOneCallDataByCustomLatLong = async (latitude, longitude) => {
        const {data} =
            await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=metric
      `);
        setCurrentData(data.current);
        setWeeklyData(data.daily);
        setTodayData(data.daily[0]);
    };

    useEffect(() => {
        getUserCoordinates();
    }, []);

    useEffect(() => {
        if (lat && long) {
            fetchOneCallData();
            fetchHourlyData();
        }
    }, [long]);

    const convertIntoDateTime = (dt) => {
        const dateTime = new Date(dt * 1000);
        return dateTime;
    };

    return (
        <main className="app">
            <div className="container">
                <ZipcodeForm
                    fetchHourlyDataByZipcode={fetchHourlyDataByZipcode}
                    fetchOneCallDataByCustomLatLong={
                        fetchOneCallDataByCustomLatLong
                    }
                    country={country}
                />
                {currentData && hourlyData && weeklyData && todayData ? (
                    <>
                        <Title city={city} country={country} />
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <CurrentWeather currentData={currentData} />
                            </div>
                            <div className="col-12 col-lg-6">
                                <CurrentInfo
                                    currentData={currentData}
                                    todayData={todayData}
                                    convertIntoDateTime={convertIntoDateTime}
                                />
                            </div>
                        </div>
                        <HourlyForecast hourlyData={hourlyData} />
                        <WeeklyForecast
                            weeklyData={weeklyData}
                            convertIntoDateTime={convertIntoDateTime}
                        />
                    </>
                ) : (
                    <Loading />
                )}
            </div>
        </main>
    );
};

export default App;
