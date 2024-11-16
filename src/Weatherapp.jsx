import InfoBox from "./InfoBox";
import Searchbox from "./SearchBox";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherinfo, setWeatherinfo] = useState({
        city: "Gujrat",
        temp: 25.05,
        humidity: 60,
        wind: 10.5,
        tempMax: 25.05,
        tempMin: 20.05,
        weather: "Haze",
    });

    const updateinfo = (newInfo) => {
        setWeatherinfo(newInfo);
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Weather App by Bilal</h1>
            <Searchbox updateinfo={updateinfo} /> {/* Fix: Pass correct prop name */}
            <br /><br />
            <InfoBox info={weatherinfo} />
        </div>
    );
}
