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



async function setupWeather(loc) {
    const weather = new Weather(loc);
    await weather.load();
    return weather;
}

let las_vegas = await setupWeather('las vegas');
console.log(las_vegas.formattedDays)