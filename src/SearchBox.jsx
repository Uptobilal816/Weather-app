import "./SearchBox.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";

export default function Searchbox() {
    let [City, setCity] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_Key = "b3551b4e29fda8fc49521a24e8127165";

    const getWeatherInfo = async () => {
    
            const response = await fetch(`${API_URL}?q=${City}&appid=${API_Key}`)
            let responsejson = await response.json();
            console.log(responsejson);
           
        let result={
            city:City,
            temp: responsejson.main.temp,
            humidity: responsejson.main.humidity,
            weather: responsejson.weather[0].description,
            temMax: responsejson.main.temp_max,
            temMin: responsejson.main.temp_min,
            wind: responsejson.wind.speed,
        }
        console.log(result);
    };

    const handleChange = (evt) => {
        setCity(evt.target.value);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (City.trim() === "") {
            alert("City name cannot be empty");
            return;
        }
        getWeatherInfo();
        setCity(""); // Clear input after fetching weather data
    };

    return (
        <div className="Textfield">
            
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="Enter City"
                    variant="outlined"
                    required
                    value={City}
                    onChange={handleChange}
                />
                <br /><br />
                <Button variant="contained" type="submit">
                    Search
                </Button>
               
            </form>
            
    
        </div>
    );
}
