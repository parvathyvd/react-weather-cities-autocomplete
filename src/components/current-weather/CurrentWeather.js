import "./CurrentWeather.css";

import React from "react";

const CurrentWeather = ({ weather, city }) => {
  console.log("currentweather", weather);
  return (
    <div className="weather">
      <div className="top">
        <p className="city">{city}</p>
        <p className="weather-description">{weather.weather[0].description}</p>
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${weather.weather[0].icon}.png`}
        />{" "}
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(weather.main.temp)}°C</p>
      </div>
      <div className="details">
        <div className="parameter-row">
          <span className="parameter-label">Details</span>
        </div>
        <div className="parameter-row">
          <span className="parameter-label">Feels like</span>
          {Math.round(weather.main.feels_like)}°C
        </div>
        <div className="parameter-row">
          <span className="parameter-label">Wind</span>
          <span className="parameter-value">{weather.wind.speed} m/s</span>
        </div>
        <div className="parameter-row">
          <span className="parameter-label">Humidity</span>
          <span className="parameter-value">{weather.main.humidity}%</span>
        </div>
        <div className="parameter-row">
          <span className="parameter-label">Pressure</span>
          <span className="parameter-value">{weather.main.pressure} hPa</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
