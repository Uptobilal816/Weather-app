import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import "./Infobox.css";

export default function InfoBox({ info }) {
    if (!info) return null;

    return (
        <div className="Infobox">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image="https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    title="Weather Image"
                />
                <CardContent>
                    <div>
                        <h2>Today's Weather Report for {info.city}</h2>
                        <p>Temperature: {info.temp}&deg;C</p>
                        <p>Temp-Max: {info.tempMax}&deg;C</p>
                        <p>Temp-Min: {info.tempMin}&deg;C</p>
                        <p>Humidity: {info.humidity}%</p>
                        <p>Wind: {info.wind} m/s</p>
                        <p>Weather: {info.weather}</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
