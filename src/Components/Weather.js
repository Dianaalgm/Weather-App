
import React, { useState, useEffect } from 'react';
import './Weather.css';


const Weather = () => {
    //To hold the weather data
    const [weatherData, setWeatherData] = useState(null);
    //loading state
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const API_KEY= process.env.REACT_APP_API_KEY;
    //New York coordinates
    // const lat = '42.3478';
    // const lon = '-71.0466';

  
    //now use useffect hook to fetch weather data 
    useEffect(() => {
      const fetchWeather = async () => {
        try {
            //Get request for the API Key and coordinates
          const response = await fetch(
            `https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=${API_KEY}`
          );
          if (!response.ok) {
            throw new Error('Network response is not ok');
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
    }, [API_KEY]);
  
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    return (
      <div className="weatherContainer">
        <h1>Weather Information</h1>
        <div className="currentWeather">
          <h2>Current Weather In New York City</h2>
          <p>Temperature: {weatherData.current.temp}°C</p>
          <p>Weather: {weatherData.current.weather[0].description}</p>
        </div>
        <div className="dailyWeather">
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

// //  console.log('API_KEY:', process.env.API_KEY)