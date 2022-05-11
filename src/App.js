import "./App.css";
import Title from "./components/Title/Title";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import CurrentInfo from "./components/CurrentInfo/CurrentInfo";
import HourlyForecast from "./components/HourlyForecast/HourlyForecast";
import WeeklyForecast from "./components/WeeklyForecast/WeeklyForecast";

const App = () => {
    return (
        <main className="app">
            <div className="container">
                <Title />
                <div className="row">
                    <div className="col col-md-6">
                        <CurrentWeather />
                    </div>
                    <div className="col col-md-6">
                        <CurrentInfo />
                    </div>
                </div>
                <HourlyForecast />
                <WeeklyForecast />
            </div>
        </main>
    );
};

export default App;

//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
