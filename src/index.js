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
class Weather{
    #key;
    #url;
    constructor(loc){
        this.loc = loc;
        this.#url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
        this.#key = '264GN7TF2UVPDJRRGJRZL2GLP';
    }
    async getWeather(){
        const data = await this.#getWeatherData();
        return this.#formatDay(data);
    }
    #formatDay(data){
        const days = [];
        const dataNeeded = ['datetime', 'tempmax', 'tempmin', 'temp', 'precipprob', 'windspeed', 'conditions'];
        for (let day of data['days']){
            let formattedDay = {};
            for (let asset of dataNeeded) {
                formattedDay[asset]=day[asset];
            }
            days.push(formattedDay);
        }
        return days;
    }
    async #getWeatherData() {
        return await fetch(`${this.#url}${this.loc}?key=${this.#key}`).then((response) => {return response.json()});
    }
}



let las_vegas = new Weather("las vegas");
console.log(las_vegas.getWeather());