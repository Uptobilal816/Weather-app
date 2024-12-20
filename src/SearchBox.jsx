import "./SearchBox.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function Searchbox({ updateinfo }) {
    const [City, setCity] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_Key = "b3551b4e29fda8fc49521a24e8127165";

    const getWeatherInfo = async () => {
        try {
            const response = await fetch(`${API_URL}?q=${City}&appid=${API_Key}&units=metric`);
            const responsejson = await response.json();
            console.log(responsejson);

            return {
                city: responsejson.name,
                temp: responsejson.main.temp,
                humidity: responsejson.main.humidity,
                weather: responsejson.weather[0].description,
                tempMax: responsejson.main.temp_max,
                tempMin: responsejson.main.temp_min,
                wind: responsejson.wind.speed,
            };
        } catch (error) {
            console.error("API call failed:", error);
            return null;
        }
    };

    const handleChange = (evt) => {
        setCity(evt.target.value);
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const newInfo = await getWeatherInfo();
        if (newInfo) {
            updateinfo(newInfo);
        }
        setCity("");
    };

    return (
        <div className="searchbox" style={{ textAlign: 'center', marginTop: '20px' }}>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="Enter City"
                    variant="outlined"
                    required
                    value={City}
                    onChange={handleChange}
                    sx={{
                        color: "white",              // Text color inside the input
                        backgroundColor: "rgba(255, 255, 255, 0.7)",  // Semi-transparent background
                        borderRadius: "5px",         // Border radius for rounded corners
                        width: "250px",              // Set input width
                        marginBottom: "20px",        // Space below input field
                    }}
                />
                <br />
                <Button variant="contained" type="submit" sx={{ marginTop: "10px" }}>
                    Search
                </Button>
            </form>
        </div>
    );
}
