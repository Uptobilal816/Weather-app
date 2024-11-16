import InfoBox from "./InfoBox"
import Searchbox from "./SearchBox"
export default function WeatherApp(){
    return (
        <div style={{textAlign:"center"}}>
        <h1>Weather App by Bilal</h1>
    <Searchbox/> 
    <br /><br />   
   <InfoBox/>
   </div>
    )
}