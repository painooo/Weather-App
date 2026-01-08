// Weather App:
// Key: 264GN7TF2UVPDJRRGJRZL2GLP
// 1. Grab user input
//      - Use input to fetch data
//      ** URL ENCODED
//      - 
// 2. Format Data
//      - (days)
//      - Use ol & li to list out data 
//          - Date
//          - Temp (hi & lo)
//          - Wind speed
//          - Sunrise & set
//          - Description

import './styles.css'
import Weather from './Weather.js'
function setupWeather(loc) {
    const weather = new Weather(loc);
    weather.setWeatherData();
    return weather;

}

let las_vegas = setupWeather('las vegas');
console.log(las_vegas);