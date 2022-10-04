import CurrentWeather from "./components/current-weather/CurrentWeather";
import Search from "./components/search/Search";
import { WEATHER_KEY } from "./api";
import { WEATHER_URL } from "./api";
import { useState } from "react";
import Forecast from "./components/forecast/Forecast";

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [city, setCity] = useState(null);

  const onSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    setCity(searchData.label);
    console.log("in the app", lat, lon);
    weatherFetch(lat, lon);
    forecastWeather(lat, lon);
  };

  const weatherFetch = async (lati, long) => {
    const response = await fetch(
      `${WEATHER_URL}/weather?lat=${lati}&lon=${long}&appid=${WEATHER_KEY}&units=metric`
    );
    const result = await response.json();
    console.log(result);
    setWeather(result);
    console.log(weather);
  };

  const forecastWeather = async (lati, long) => {
    const response = await fetch(
      `${WEATHER_URL}/forecast?lat=${lati}&lon=${long}&appid=${WEATHER_KEY}&units=metric`
    );
    const result = await response.json();
    console.log(result);
    setForecast(result);
  };

  return (
    <div className="container">
      <h1 className="main-heading">
        Cities Weather Display with Autocomplete Search
      </h1>
      <Search onSearchChange={onSearchChange} />
      {weather && city && <CurrentWeather weather={weather} city={city} />}
      {forecast && <Forecast forecast={forecast} />}
    </div>
  );
}

export default App;
