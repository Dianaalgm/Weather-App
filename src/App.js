import React from 'react';
import './App.css';
// import './Components/Weather'
import Weather from './Components/Weather';

// const API_KEY = process.env.API_KEY
// //Need to add Latitude and Longitude coordinates with this API
// const lat = ''
// const long = ''

// const App = () => {
//   const [weatherData, setWeatherData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const API_KEY = process.env.API_KEY
//   //Need to add Latitude and Longitude coordinates with this API
//   const lat = '';
//   const long = '';


// );

// return (
//   <div className="App">
      
//   </div>
// );

function App() {
  return(
    <div className='App'>
      <Weather/>

    </div>
  )
}

export default App;
