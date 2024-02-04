import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

export default function Search() {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState("");
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [icon, setIcon] = useState("");
  function showWeather(response) {
    setCity(`${response.data.name}, ${response.data.sys.country}`);
    setTemperature(`Temperature: ${Math.round(response.data.main.temp)}°C`);
    setDescription(`Description: ${response.data.weather[0].description}`);
    setHumidity(`Humidity: ${response.data.main.humidity}%`);
    setWind(`Wind: ${Math.round(response.data.wind.speed)}km/h`);
    setIcon(
      `http://openweathermap.org/img/w/${response.data.weather[0].icon}.png`
    );
    console.log(response);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let searchInput = document.getElementById("search");
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=1615adaa703ba9f96a337d48232ad32d&units=metric`;
    axios.get(url).then(showWeather);
  }

  return (
    <div className="search-engine">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          name="Search"
          id="search"
          placeholder="Search City..."
          className="m-2 p-1 border-1 rounded"
        />
        <input
          type="submit"
          value="Search"
          className="m-2 p-1 border-1 rounded"
        />
      </form>
      <div className="weather">
        <h1 className="p-2">{city}</h1>
        <p>{temperature}</p>
        <p>{description}</p>
        <p>{humidity}</p>
        <p>{wind}</p>
        <p>{icon && <img src={icon} alt="Weather Icon" />}</p>
      </div>
    </div>
    <div>
        <div className="Github">
      <p id="github-link">
        <a
          href="https://github.com/mulurebrenda/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        &nbsp;by Brenda Mulure&nbsp;
        <a
          href="https://app.netlify.com/sites/react-weather-app-bm/configuration/general"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
      </p>
    </div>
    </div>
  );
}
