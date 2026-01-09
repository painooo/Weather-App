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

const searchBtn = document.querySelector("#search");
searchBtn.addEventListener("click", async (e) => {
    const location = document.querySelector("#loc").value;
    const weather = await setupWeather(location);
    console.log(weather)
    WeatherDOM.createDOM(weather.loc, weather.formattedDays);
})
const container = document.querySelector("#container");
class WeatherDOM {
    static createDOM(loc, days) {
        this.clearContainer();
        this.#createHeader(loc);
        const bodyContainer = this.#createBodyContainer();
        this.#createBody(bodyContainer, days);
    }
    static clearContainer(){
        container.textContent = "";
    }
    static #createBodyContainer(){
        const bodyContainer = document.createElement("div")
        bodyContainer.classList.add("bodyContainer");
        container.appendChild(bodyContainer);
        return bodyContainer;
    }
    static #createHeader(loc) {
        const title = document.createElement("h1");
        title.textContent = loc;
        title.classList.add("title");
        container.appendChild(title);
    };
    static #createBody(container, days) {
        this.#createBodyLists(container, days);
    }
    static #createBodyLists(container, days) {
        for (let i = 0; i < days.length; i++){
            const list = document.createElement("ul");
            const currDay = days[i];
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
// const las_vegas = await setupWeather('las vegas');
// const las_vegasDOM = setupWeatherDOM(las_vegas);
// las_vegasDOM.createDOM();

// console.log(las_vegas.formattedDays)