import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import Weather from './component/Weather';
import withListLoading from './component/withListLoading';


const App = () => {

  let cityName = 'Seattle';
  let stateCode = 'Wa';

  const ListLoading = withListLoading(Weather);
  const [appState, setAppState] = useState({
    loading: false,
    weatherData: null,
  });

  useEffect (() => {
    setAppState({ loading: true });
    const apiUrl = `https://api.weatherbit.io/v2.0/current?key=${process.env.REACT_APP_WEATHERBIT_API_KEY}&city=${cityName},${stateCode}`;
  
    axios.get(apiUrl).then((weatherData)=>{
      const allWeatherData = weatherData.data;
      setAppState({ loading: false, weatherData: allWeatherData });
    })
  }, [setAppState]);
  return (
    <div className='App'>
      <div className='container'>
        <h1> The weather in Seattle </h1>
      </div>
      <div className='weather-container'>
          <ListLoading isLoading={appState.loading} weatherData={appState.weatherData} />
    </div>
    </div>

  )

}

export default App;
