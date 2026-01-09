// Weather App:
// Key: 264GN7TF2UVPDJRRGJRZL2GLP
import './styles.css'
import Weather from './Weather.js'
import WeatherDOM from './WeatherDOM.js'

const searchBtn = document.querySelector("#search");
searchBtn.addEventListener("click", async (e) => {
    const location = document.querySelector("#loc").value;
    const weather = await setupWeather(location);
    console.log(weather)
    WeatherDOM.createDOM(weather.loc, weather.formattedDays);
})

async function setupWeather(loc) {
    const weather = new Weather(loc);
    await weather.load();
    return weather;
}