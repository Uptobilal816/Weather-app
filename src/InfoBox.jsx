import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import "./Infobox.css"

export default function InfoBox (){
    let info={
        temp: 25.05,
        humidity: 60,
        wind: 10.5,
        tempMax:25.05,
        tempMin: 20.05,
        weather: "Haze",
    };
    return (
        <div className='Infobox'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="green iguana"
      />
      
      <CardContent >
        <div >
            <h2>Today Weather report  {info.weather}</h2>
            <p>Temperature : {info.temp}&deg;C</p>
            <p>Temp-Max : {info.tempMax}&deg;C</p>
            <p>Temp-MIn : {info.tempMin}&deg;C</p>
            <p>Humidity : {info.humidity}%</p>
            <p>Wind : {info.wind}</p>
        </div>
        
      </CardContent>
      
    

    </Card>
    </div>
    ) 
}