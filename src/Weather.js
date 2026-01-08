export default class Weather{
    #key;
    #url;
    data;
    constructor(loc){
        this.loc = loc;
        this.#url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
        this.#key = '264GN7TF2UVPDJRRGJRZL2GLP';
    }
    getWeather(){
        return this.#formatDay(this.data);
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
        const response = await fetch(`${this.#url}${this.loc}?key=${this.#key}`);
        return await response.json();
    }
    setWeatherData(){
        const response = this.#getWeatherData();
        this.data=response;
    }
}