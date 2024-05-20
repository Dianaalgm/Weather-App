import React, { useState, useEffect } from 'react';

const Weather = () => {
    //To hold the weather data
    const [weatherData, setWeatherData] = useState(null);
    //loading state
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const API_KEY = process.env.API_KEY;
    //New York coordinates
    const lat = '40.7128';
    const lon = '-74.0060';
  
    //now use useffect hook to fetch weather data 
    useEffect(() => {
      const fetchWeather = async () => {
        try {
            //Get request for the API Key and coordinates
          const response = await fetch(
            `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${API_KEY}&units=metric`
          );
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setWeatherData(data);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      };
      //Call the fetchWeather function
      fetchWeather();
    }, [lat, lon, API_KEY]);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    return (
      <div className="weather-container">
        <h1>Weather Information</h1>
        <div className="current-weather">
          <h2>Current Weather In New York City</h2>
          <p>Temperature: {weatherData.current.temp}°C</p>
          <p>Weather: {weatherData.current.weather[0].description}</p>
        </div>
        <div className="daily-weather">
          <h2>Daily Forecast</h2>
          {weatherData.daily.map((day, index) => (
            <div key={index} className="day">
              <p>Day {index + 1} - Temp: {day.temp.day}°F - {day.weather[0].description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Weather;
