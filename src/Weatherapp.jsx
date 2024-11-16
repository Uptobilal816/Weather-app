import InfoBox from "./InfoBox"
import Searchbox from "./SearchBox"
import { useState } from "react"

export default function WeatherApp(){
let [weatherinfo, setWeatherinfo]=useState({
    city:"gujrat",
    temp: 25.05,
    humidity: 60,
    wind: 10.5,
    tempMax:25.05,
    tempMin: 20.05,
    weather: "Haze",
})

let updateinfo=(newInfo)=>{
    setWeatherinfo(newInfo)
}
    return (
        <div style={{textAlign:"center"}}>
        <h1>Weather App by Bilal</h1>
    <Searchbox updateinfo={updateinfo}/> 
    <br /><br />   
   <InfoBox info={weatherinfo}/>
   </div>
    )
}