export default class Weather{
    #key;
    #url;
    constructor(loc){
        this.loc = loc;
        this.#url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
        this.#key = '264GN7TF2UVPDJRRGJRZL2GLP';
    }
    async load() {
        const rawData = await this.#fetchWeatherData();
        this.formattedDays =  this.#formatDays(rawData);
        return this.formattedDays;
    }
    #formatDays(rawData){
        let days = [];
        const dataNeeded = ['datetime', 'tempmax', 'tempmin', 'temp', 'precipprob', 'windspeed', 'conditions'];
        const dataTitle = ['Date', 'Max Temp', 'Min Temp', 'Cur. Temp', 'Precip. Prob', 'WindSpeed', 'Conditions'];
        for (let day of rawData['days']){
            let formattedDay = {};
            for (let i = 0; i < dataNeeded.length; i++) {
                formattedDay[dataTitle[i]]=day[dataNeeded[i]];
            }
            days.push(formattedDay);
        }
        return days;
    }
    async #fetchWeatherData() {
        const response = await fetch(`${this.#url}${this.loc}?key=${this.#key}`);
        const result = await response.json();
        return result;
    }
}