// Weather App:
// Key: 264GN7TF2UVPDJRRGJRZL2GLP
// 1. Grab user input
//      - Use input to fetch data
//      ** URL ENCODED
//      - 
// 2. Format Data
//      - Use ol & li to list out data 
//          - Date
//          - Temp (hi & lo)
//          - Wind speed
//          - Sunrise & set
//          - Description

import './styles.css'
class Weather{
    #key;
    constructor(loc){
        this.loc = loc;
        this.url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
        this.#key = '264GN7TF2UVPDJRRGJRZL2GLP';
    }
    getWeather(){
        console.log(this.#getWeatherData());
    }
    async #getWeatherData() {
        const response = await fetch(`${this.url}${this.loc}?key=${this.#key}`).then((response) => {return response.json()});
        return response;
    }
}

let las_vegas = new Weather("las vegas");
las_vegas.getWeather();