import React, { useState } from "react";
import axios from "axios";
import "./weather.css";



function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const API_KEY = "c2e3df23418f0675c160f9f099595b85";

  const getreport = async () => {
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }

    setLoading(true);
    setError("");


    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
    } catch (err) {
      setError("City not found");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="weather-wrapper">
      {/* 🎥 Background Video
      <video autoPlay muted loop className="bg-video">
        <source src={bgvideo} type="video/mp4" />
      </video> */}

      {/* 🌫 Overlay */}
      <div className="overlay">
        <div className="container">
          <h1>🌤 Weather App</h1>

          <div className="search-box">
            <input
              type="text"
              placeholder="Enter City Name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={getreport}>
              {loading ? "Loading..." : "Get Report"}
            </button>
          </div>

          {error && <p className="error">{error}</p>}

          {weather && (
            <div className="weather-card">
              <h2>
                {weather.name}, {weather.sys.country}
              </h2>
               <p>🌡️ Temperature :{weather.main.temp}°C</p>
               <p>☁️ weather:{weather.weather[0].description}</p>
               <p>💨 Wind Speed:{weather.wind.speed}m/s</p>
               <p>💧 Humidity:{weather.main.humidity}%</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Weather;


