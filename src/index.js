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

// const searchBtn = document.querySelector("#search");
// searchBtn.addEventListener("click", (e) => {
    // const location = document.querySelector("#loc");
    // setupWeather(location);
// })
const container = document.querySelector("#container");
class WeatherDOM {
    constructor(weather) {
        this.weather = weather;
        this.days = this.weather.formattedDays;
    }
    createDOM() {
        container.textContent = "";
        this.#createHeader();
        const bodyContainer = document.createElement("div")
        bodyContainer.classList.add("bodyContainer");
        container.appendChild(bodyContainer);
        this.#createBody(bodyContainer);
    }
    #createHeader() {
        const title = document.createElement("h1");
        title.textContent = this.weather.loc;
        title.classList.add("title");
        container.appendChild(title);
    };
    #createBody(container) {
        this.#createBodyLists(container);
    }
    #createBodyLists(container) {
        for (let i = 0; i < this.days.length; i++){
            const list = document.createElement("ul");
            const currDay = this.days[i];
            for (let items in currDay) {
                const listItem = document.createElement("li");
                const title = document.createElement("p");
                const data = document.createElement("p");

                title.textContent = items;
                data.textContent = currDay[items];

                list.appendChild(listItem);
                listItem.appendChild(title);
                listItem.appendChild(data);
            }
            const title = document.createElement("h3");
            title.textContent = `Day ${i}`;
            container.appendChild(title);
            container.appendChild(list);
        }
    }
}

async function setupWeather(loc) {
    const weather = new Weather(loc);
    await weather.load();
    return weather;
}
function setupWeatherDOM(weather){
    return new WeatherDOM(weather)
}
const las_vegas = await setupWeather('las vegas');
const las_vegasDOM = setupWeatherDOM(las_vegas);
las_vegasDOM.createDOM();

console.log(las_vegas.formattedDays)