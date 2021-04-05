import React from 'react';
// converts JSON object into 

const Weather = (props) =>{
    const { weatherData } = props;
    if (!weatherData) return <p>Couldn't find weather data</p>;
    return (
        <ul>
            {Array.of(weatherData)[0]['data'].map((weather)=>{
                return (
                    <p key={weather.rh} className='list'>
                        <span className='weather-desc'> The weather in {weather.city_name} is {weather.temp} degrees Celsius and {weather.weather.description}. Hopefully, we'll be able to tell the weather in your location soon too.
                        </span>

                    </p>
                );
            })}

        </ul>
    );
};
export default Weather