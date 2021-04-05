import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import Location from './component/Location';
import Weather from './component/Weather';
import withListLoading from './component/withListLoading';

// couldn't get both to work. will try to take in city and state info from forms


const App = () => {
  const ListLoading = withListLoading(Weather);
  const [appState, setAppState] = useState({
    loading: false,
    weatherData: null,
  });

  useEffect (() => {
    setAppState({ loading: true });
    const apiUrl = `https://api.weatherbit.io/v2.0/current?key=${process.env.REACT_APP_WEATHERBIT_API_KEY}&city=Seattle,WA`;
  
    axios.get(apiUrl).then((weatherData)=>{
      const allWeatherData = weatherData.data;
      setAppState({ loading: false, weatherData: allWeatherData });
    })
  }, [setAppState]);
  return (
    <div className='App'>
      <div className='container'>
        <h1> Your weather </h1>
      </div>
      <div className='weather-container'>
          <ListLoading isLoading={appState.loading} weatherData={appState.weatherData} />
    </div>
    <footer>
      <div className='footer'>
        Built {' '}
        <span role='img' aria-label='love'>
        💚
        </span>{' '}
      </div>
    </footer>
    </div>

  )

}

export default App;
