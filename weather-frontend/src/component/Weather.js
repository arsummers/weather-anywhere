import React from 'react';
// converts JSON object into 

const Weather = (props) =>{
    const { weatherData } = props;
    if (!weatherData) return <p>Couldn't find weather data</p>;
    return (
        <ul>
            <h2 className='list-head'>Weather data</h2>

            {Array.of(weatherData)[0]['data'].map((weather)=>{
                return (
                    <li key={weather.rh} className='list'>
                        <span className='weather-desc'> The weather in {weather.city_name} is {weather.temp} degrees and {weather.weather.description}
                        </span>

                    </li>
                );
            })}

        </ul>
    );
};
export default Weather