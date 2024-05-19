import React, { useState } from 'react';
import './App.css';

const API_KEY = process.env.API_KEY

const App = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const [error, setError] = useState('');

  const fetchWeather = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      setWeather(data);
      setError('');
    } catch (error) {
      setError(error.message);
      setWeather(null);
    }
  };








};
  // return (
  //   <div className="App">
      
  //   </div>
  // );


export default App;
