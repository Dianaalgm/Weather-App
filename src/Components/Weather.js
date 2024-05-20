
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
    const lat = '42.3478';
    const long = '-71.0466';

  
    //now use useffect hook to fetch weather data 
    useEffect(() => {
      const fetchWeather = async () => {
        try {
            //Get request for the API Key and coordinates
          const response = await fetch(
            `https://api.tomorrow.io/v4/weather/forecast?location=${lat},${long}&apikey=${API_KEY}`
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
    }, [lat, long, API_KEY]);
  
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    // Adjust the extraction based on the Tomorrow.io API response format
  const currentWeather = weatherData.timelines.hourly[0].values;
  const dailyWeather = weatherData.timelines.daily;
  
    return (
      <div className="weatherContainer">
        <h1>Weather Information</h1>
        <div className="currentWeather">
{/* //---> boston? */}
          <h2>Current Weather In Boston</h2>  
          <p>Temperature: {currentWeather.temperature}°C</p>
        <p>Weather: {currentWeather.weatherCode}</p>
        </div>
        <div className="dailyWeather">
        <h2>Daily Forecast</h2>
        {dailyWeather.map((day, index) => (
          <div key={index} className="day">
            <p>Day {index + 1} - Temp: {day.values.temperatureMax}°C - {day.values.weatherCode}</p>
          </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Weather;

//   const data = await response.json();
// console.log(data);  // Add this line
// setWeatherData(data);

// //  console.log('API_KEY:', process.env.API_KEY)